import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="container my-16 grid md:grid-cols-2 gap-8 items-center">
            {/* Bên trái: Giới thiệu công ty */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-bold mb-4">Giới thiệu công ty</h2>
                <p className="mb-4 text-gray-700">
                    Công ty TNHH THÁI HOÀNG BUILD với Trụ sở chính tại 206/7 Bình Tiên, Phường Bình Tiên, TPHCM
                </p>
                <p className="mb-4 text-gray-700">
                    Xây dựng trọn gói sửa chữa cải tạo nhà tiền chế & khung thép, thi công nội thất
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Đội ngũ kiến trúc sư, kỹ sư giàu kinh nghiệm</li>
                    <li>Đội thợ thi công lành nghề, tuân thủ kỷ luật, an toàn lao động</li>
                    <li>Cam kết tiến độ, Đảm bảo chất lượng, Không phát sinh</li>
                </ul>
            </motion.div>

            {/* Bên phải: Google Maps */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.502324199162!2d106.700423!3d10.776889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3b6f6f6f6f%3A0x123456789abcdef!2zQ8O0bmcgVHkgVGjDoG5oIEh1eQ!5e0!3m2!1svi!2s!4v1670000000000!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </motion.div>
        </section>
    );
}
