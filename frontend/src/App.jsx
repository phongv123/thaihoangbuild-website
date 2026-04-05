import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";


import Home from './pages/Home';
import Products from './pages/Products';
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Blog from "./pages/Blog";
import ProjectDetail from "./pages/HomeProject/ProjectDetail";

import AdminLogin from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import ProjectsAdmin from './pages/Admin/Projects';
import ProductsAdmin from './pages/Admin/Products';
import CategoriesAdmin from './pages/Admin/Categories';
import Projects from './pages/Projects';
import ZaloFloatingButton from "./components/ZaloFloatingButton";


import axios from "axios";

export default function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <ScrollToTop />

      {/* Chỉ render Navbar/Footer nếu KHÔNG phải trang admin */}
      {!isAdminPage && <Navbar />}

      <main className="flex-1">
        <Routes>
          {/* User routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin"
            element={
              localStorage.getItem('admin_token')
                ? <AdminDashboard />
                : <Navigate to="/admin/login" />
            }
          />

          <Route path="/admin/categories" element={<CategoriesAdmin />} />
          <Route path="/admin/products" element={<ProductsAdmin />} />
          <Route path="/admin/projects" element={<ProjectsAdmin />} />
        </Routes>

        {/* Ẩn nút Zalo trong admin */}
        {!isAdminPage && <ZaloFloatingButton />}
      </main>

      {!isAdminPage && <Footer />}
    </div>
  );
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:5000",
});

// request: đính kèm token nếu có
api.interceptors.request.use((config) => {
  const t = localStorage.getItem("admin_token");
  if (t) config.headers = { ...(config.headers || {}), Authorization: "Bearer " + t };
  return config;
});

// response: nếu 401 => xoá token và chuyển về login
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("admin_token");
      // dùng location thay vì router nếu interceptor ở module ngoài React
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);