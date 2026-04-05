# DecorStudio – Clone gần giống BienHoaDecor (Front: React, Back: Node, DB: MongoDB)

## 1) Chạy Backend
```bash
cd backend
cp .env.example .env         # cập nhật MONGODB_URI nếu cần
npm i
npm run seed                 # nạp dữ liệu mẫu
npm run dev                  # API tại http://localhost:4000
```

## 2) Chạy Frontend
```bash
cd frontend
npm i
npm run dev                  # http://localhost:5173
```

> Mẹo: tạo file `.env` trong `/frontend` nếu cần tùy chỉnh endpoint:
```
VITE_API_URL=http://localhost:4000/api
```

### Kiến trúc & tính năng
- Navbar, Hero, các lưới thẻ “Dự án / Vật liệu / Tư vấn”, Quy trình 10 bước, Footer.
- Form “Đăng ký báo giá” gửi về `/api/leads` (lưu MongoDB).
- Mô hình dữ liệu: Category, Project, Product, Post, Banner, Lead.
- Endpoint mẫu: `/api/projects`, `/api/products`, `/api/posts`, `/api/categories`, `/api/leads`, `/api/banners`.
- Thư mục `seed/` chứa dữ liệu mẫu để xem ngay.
- Giao diện sạch, dễ thay đổi màu, font, khoảng cách với Tailwind (đã cấu hình).

### Lưu ý bản quyền
Dự án này **không** sao chép nội dung, ảnh hay thương hiệu của BienHoaDecor; chỉ mô phỏng bố cục và tính năng tương tự để bạn tùy biến.
