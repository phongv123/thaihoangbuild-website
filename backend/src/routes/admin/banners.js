import express from "express";
import adminAuth from "../../middleware/adminAuth.js";

import {
    getBanners,
    createBanner,
    updateBanner,
    deleteBanner,
} from "../../controllers/bannerController.js";

const router = express.Router();

router.get("/", adminAuth, getBanners);

router.post("/", adminAuth, createBanner);

router.put("/:id", adminAuth, updateBanner);

router.delete("/:id", adminAuth, deleteBanner);

export default router;