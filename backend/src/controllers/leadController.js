// controllers/leadController.js
import { Lead } from '../models/common.js'
import { sendMail } from '../config/mail.js'

// tránh chèn script vào email
const escapeHtml = (str) =>
    str?.replace(/</g, "&lt;").replace(/>/g, "&gt;")

// [GET] /api/leads
export const getLeads = async (_req, res) => {
    try {
        const items = await Lead.find().sort({ createdAt: -1 })
        res.json({ items })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// [POST] /api/leads
export const createLead = async (req, res) => {
    try {

        // 3️⃣ Tạo Lead trong database
        const it = await Lead.create({
            ...req.body,
            source: req.headers['x-source'] || 'website'
        })

        // 4️⃣ Email ADMIN
        const adminHtml = `
            <p><b>Họ tên:</b> ${escapeHtml(it.name)}</p>
            <p><b>Email:</b> ${escapeHtml(it.email)}</p>
            <p><b>Số điện thoại:</b> ${escapeHtml(it.phone)}</p>
            <p><b>Địa chỉ:</b> ${escapeHtml(it.address)}</p>
            <p><b>Nội dung:</b> ${escapeHtml(it.message)}</p>
            <hr/>
            <p>Nguồn: ${it.source}</p>
        `

        try {
            await sendMail({
                to: process.env.ADMIN_EMAIL,
                subject: `📩 Liên hệ mới từ ${it.name}`,
                html: adminHtml,
            })
        } catch (mailErr) {
            console.error("❌ Mail ADMIN lỗi:", mailErr.message)
        }

        // 5️⃣ Email khách
        const customerHtml = `
            <h3>Xin chào ${it.name},</h3>
            <p>Cảm ơn bạn đã liên hệ với chúng tôi!</p>
            <p>Chúng tôi đã nhận được thông tin của bạn và sẽ phản hồi trong thời gian sớm nhất.</p>
            <br/>
            <p><b>Nội dung bạn gửi:</b></p>
            <blockquote>${escapeHtml(it.message)}</blockquote>
            <br/>
            <p>Trân trọng,<br/>Đội ngũ hỗ trợ khách hàng</p>
        `

        if (it.email) {
            try {
                await sendMail({
                    to: it.email,
                    subject: "✅ Cảm ơn bạn đã liên hệ với chúng tôi!",
                    html: customerHtml,
                })
            } catch (mailErr) {
                console.error("❌ Mail KHÁCH lỗi:", mailErr.message)
            }
        }

        // 6️⃣ Trả phản hồi
        res.status(201).json({ message: "Gửi thành công" })

    } catch (err) {

        console.error('❌ Lỗi khi tạo lead:', err)

        if (err.name === "ValidationError") {
            const errors = Object.values(err.errors).map(e => e.message)
            return res.status(400).json({ message: errors[0] })
        }

        res.status(500).json({ message: "Lỗi server" })
    }
}