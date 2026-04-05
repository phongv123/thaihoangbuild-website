# DecorStudio  (Front: React, Back: Node, DB: MongoDB)

## 1) Chạy Backend
```bash
cd backend
cp .env.example .env         # cập nhật MONGODB_URI nếu cần
npm i
npm run seed                 # nạp dữ liệu mẫu
npm run dev                  # 
```

## 2) Chạy Frontend
```bash
cd frontend
npm i
npm run dev                  
```


### Kiến trúc & tính năng
- Navbar, Hero, các lưới thẻ “Dự án / Vật liệu / Tư vấn”, Quy trình 10 bước, Footer.
- Form “Đăng ký báo giá” gửi về `/api/leads` (lưu MongoDB).
- Mô hình dữ liệu: Category, Project, Product, Post, Banner, Lead.
- Endpoint mẫu: `/api/projects`, `/api/products`, `/api/posts`, `/api/categories`, `/api/leads`, `/api/banners`.
- Thư mục `seed/` chứa dữ liệu mẫu để xem ngay.
- Giao diện sạch, dễ thay đổi màu, font, khoảng cách với Tailwind (đã cấu hình).

