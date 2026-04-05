// src/routes/admin/login.js
import { Router } from "express";
const r = Router();

// route đúng: /admin/login
r.post("/login", (req, res) => {
    const { password } = req.body;
    const SECRET = process.env.ADMIN_SECRET || "admin_secret";

    if (password === SECRET) return res.json({ token: SECRET });
    return res.status(401).json({ error: "Wrong password" });
});

export default r;
