import { useParams } from "react-router-dom";

export default function ProjectDetail() {
    const { id } = useParams();

    return (
        <div className="container my-20">
            <h1 className="text-3xl font-bold text-blue-800 mb-6">
                Chi tiết dự án
            </h1>

            <p className="text-gray-700">
                Bạn đang xem dự án: <b>{id}</b>
            </p>
        </div>
    );
}
