import React, { useState } from "react";
import { motion } from "framer-motion";

export default function BlogComponent() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");

    const categories = ["Tất cả", "Chăm sóc nhà", "Vật liệu", "Phong thủy", "Thi công"];

    const posts = [
        {
            id: 1,
            title: "Cách chọn vật liệu xây dựng chất lượng",
            desc: "Lựa chọn vật liệu phù hợp giúp công trình bền vững và tiết kiệm chi phí.",
            category: "Vật liệu",
            date: "20/10/2025",
            cover: "/blog/hinh1.jpg",
        },
        {
            id: 2,
            title: "5 mẹo chống thấm hiệu quả cho nhà ở",
            desc: "Những phương pháp chống thấm phổ biến và hiệu quả nhất hiện nay.",
            category: "Chăm sóc nhà",
            date: "12/10/2025",
            cover: "/blog/hinh2.jpg",
        },
        {
            id: 3,
            title: "Phong thủy phòng khách cho gia chủ mệnh Mộc",
            desc: "Bố trí không gian phòng khách hợp phong thủy để thu hút tài lộc.",
            category: "Phong thủy",
            date: "10/10/2025",
            cover: "/blog/hinh3.jpeg",
        },
        {
            id: 4,
            title: "Quy trình thi công nền móng vững chắc",
            desc: "Các bước thi công nền móng đúng kỹ thuật để tránh sụt lún.",
            category: "Thi công",
            date: "05/10/2025",
            cover: "/images/blog4.jpg",
        },
    ];

    const filteredPosts = posts.filter(
        (post) =>
            (selectedCategory === "Tất cả" || post.category === selectedCategory) &&
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="font-sans bg-gray-50 text-gray-800">
            {/* ===== Banner ===== */}
            <section className="relative h-[300px] md:h-[600px] flex items-center justify-center overflow-hidden mb-12 md:mb-18">

                <img
                    src="/banners/tuvan.jpg"
                    alt="Banner tư vấn"
                    className="absolute inset-0 w-full h-full object-cover brightness-75"
                />
                <div className="relative text-center z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-4xl md:text-5xl font-bold mb-2"
                    >
                        Tư vấn & Chia sẻ
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-white text-lg"
                    >
                        Cập nhật kiến thức và kinh nghiệm thực tế trong xây dựng & thiết kế
                    </motion.p>
                </div>
            </section>

            {/* ===== Thanh tìm kiếm & Danh mục ===== */}
            <section className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                    {/* Ô tìm kiếm */}
                    <div className="relative w-full md:w-1/3">
                        {/* Icon kính lúp */}
                        <motion.span
                            initial={{ opacity: 1, x: 0 }}
                            animate={{
                                opacity: searchTerm ? 0 : 1,
                                x: searchTerm ? -10 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                        >
                        </motion.span>

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={(e) => e.target.placeholder = ""}     // ẩn placeholder khi focus
                            onBlur={(e) => e.target.placeholder = "Tìm bài viết..."} // hiện lại khi blur
                            placeholder="Tìm bài viết..."
                            className="w-full px-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
                        />
                    </div>


                    {/* Danh mục */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === cat
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 hover:bg-gray-300"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Bài viết nổi bật ===== */}
            <section className="container mx-auto px-4 pb-12 pt-6">
                <h2 className="text-2xl font-bold mb-8 text-center">Bài viết nổi bật</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {posts.slice(0, 2).map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative rounded-2xl overflow-hidden shadow-lg group"
                        >
                            <img
                                src={post.cover}
                                alt={post.title}
                                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-5 text-white">
                                <h3 className="text-xl font-semibold">{post.title}</h3>
                                <p className="text-sm opacity-90">{post.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== Danh sách bài viết ===== */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                        >
                            <img
                                src={post.cover}
                                alt={post.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-5">
                                <p className="text-sm text-gray-500 mb-2">
                                    {post.date} • {post.category}
                                </p>
                                <h2 className="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 text-sm line-clamp-3">{post.desc}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* ===== Giới thiệu đội ngũ ===== */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold mb-4">Đội ngũ tư vấn của chúng tôi</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    Với hơn 10 năm kinh nghiệm trong lĩnh vực xây dựng & thiết kế, đội ngũ
                    ThaiHoangBuild luôn sẵn sàng chia sẻ kiến thức và giải pháp tối ưu
                    nhất cho khách hàng.
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                    {["/team1.jpg", "/team2.jpg", "/team3.jpg"].map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="w-40 h-40 rounded-full overflow-hidden shadow-md"
                        >
                            <img
                                src={member}
                                alt="Thành viên đội ngũ"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== Đăng ký nhận tin ===== */}
            <section className="bg-blue-600 text-white py-14 text-center">
                <h2 className="text-2xl font-bold mb-4">Đăng ký nhận tin tư vấn mới</h2>
                <p className="mb-6 opacity-90">
                    Nhập email của bạn để nhận những bài viết hữu ích từ ThaiHoangBuild mỗi tuần.
                </p>
                <div className="flex justify-center gap-2 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Nhập email của bạn..."
                        className="flex-grow px-4 py-2 rounded-l-full text-gray-800 focus:outline-none"
                    />
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-r-full font-semibold hover:bg-gray-200 transition">
                        Đăng ký
                    </button>
                </div>
            </section>
        </div>
    );
}
