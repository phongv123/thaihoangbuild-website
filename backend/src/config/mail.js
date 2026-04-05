import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
})

export async function sendMail({ to, subject, html }) {
    try {
        const info = await transporter.sendMail({
            from: `"ThaiHoangBuild" <${process.env.MAIL_USER}>`,
            to,
            subject,
            html,
        })
        console.log('✅ Email đã gửi:', info.response)
    } catch (err) {
        console.error('❌ Gửi email thất bại:', err.message)
    }
}
