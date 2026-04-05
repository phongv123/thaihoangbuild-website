import React from 'react'
export default function Process() {
  const steps = [
    'Liên hệ tư vấn & Khảo sát hiện trạng',
    'Báo giá sơ bộ & Dự toán sơ bộ',
    'Triển khai hồ sơ thiết kế',
    'Bàn giao hồ sơ thiết kế ',
    'Dự toán & Báo giá chi tiết',
    'Kí hợp đồng thi công',
    'Sản xuất & Thi công & Lắp đặt',
    'Giám sát thi công',
    'Vệ sinh & Nghiệm thu & Bàn giao',
    'Bảo hành & Chăm sóc khách hàng'
  ]
  return (
    <section className="container mt-12">
      <h2 className="text-2xl font-semibold mb-4">Quy trình thực hiện</h2>
      <ol className="grid md:grid-cols-2 gap-4">
        {steps.map((s, i) => (
          <li key={i} className="card p-4 flex gap-3"><span className="badge">{i + 1}</span>{s}</li>
        ))}
      </ol>
    </section>
  )
}
