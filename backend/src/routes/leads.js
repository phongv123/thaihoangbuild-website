import express from "express";
import { createLead, getLeads } from "../controllers/leadController.js";
// import { verifyCaptcha } from "../middleware/verifyCaptcha.js";

const router = express.Router();

// [GET] /api/leads
router.get("/", getLeads);

// [POST] /api/leads
router.post("/", createLead);

export default router;