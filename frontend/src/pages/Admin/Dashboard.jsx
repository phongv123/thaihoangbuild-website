import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Bảng điều khiển</h1>
      <p>Chào mừng bạn đến trang quản trị. Chọn bên trái để quản lý nội dung.</p>
    </AdminLayout>
  );
}
