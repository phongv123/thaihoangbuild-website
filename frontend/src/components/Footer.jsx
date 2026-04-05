import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Công ty */}
        <div>
          <h4 className="text-lg font-bold text-white mb-3">THAIHOANGBUILD</h4>
          <p className="text-sm mb-2">Thiết kế & thi công xây dựng trọn gói.</p>
          <p className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-2 text-indigo-400" />
            8:00 - 17:00, Thứ 2 - Thứ 7
          </p>
        </div>

        {/* Danh mục */}
        <div>
          <h4 className="text-lg font-bold text-white mb-3">Lĩnh vực</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">
              Xây dựng trọn gói
            </li>
            <li className="hover:text-white cursor-pointer">
              Thiết kế & Thi công
            </li>
            <li className="hover:text-white cursor-pointer">
              Cải tạo & sửa chữa
            </li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <h4 className="text-lg font-bold text-white mb-3">Liên hệ</h4>
          <p className="flex items-start text-sm mb-2">
            <MapPin className="w-4 h-4 mr-2 text-indigo-400 mt-0.5" />
            Số 206/7 Đường Bình Tiên, P. Bình Tiên, Tp HCM, Việt Nam
          </p>
          <p className="flex items-center text-sm mb-2">
            <Mail className="w-4 h-4 mr-2 text-indigo-400" />
            thaihoangbuild@gmail.com
          </p>
          <p className="flex items-center text-sm mb-2">
            <Phone className="w-4 h-4 mr-2 text-indigo-400" />
            0969131718
          </p>
          <p className="text-sm">Mã số thuế: 0318814723</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs py-4 bg-gray-800 text-gray-400">
        © 2025 ThaiHoangBuild. All rights reserved.
      </div>
    </footer>
  );
}
