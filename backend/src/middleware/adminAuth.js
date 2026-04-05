import dotenv from 'dotenv'
dotenv.config()

export default function adminAuth(req, res, next) {
    const h = req.headers.authorization || '';
    const token = h.startsWith('Bearer ') ? h.slice(7) : h;

    if (!token || token !== (process.env.ADMIN_SECRET || 'admin_secret')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}
