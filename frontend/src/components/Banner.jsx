import React from "react";
import { motion } from "framer-motion";

const Banner = ({ title, desc, btn1, btn2 }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
            <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                key={title} // để mỗi slide đổi thì animation chạy lại
            >
                {title}
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl mb-6 drop-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                key={desc}
            >
                {desc}
            </motion.p>

            <motion.div
                className="flex gap-4 mt-10 md:mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                key={btn1 + btn2}
            >
                {/* {btn1 && (
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                        {btn1}
                    </button>
                )}
                {btn2 && (
                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                        {btn2}
                    </button>
                )} */}
            </motion.div>
        </div>
    );
};

export default Banner;
