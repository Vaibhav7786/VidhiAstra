import express from "express";
import { createContact, getContacts } from "../controllers/contactController.js";
const router = express.Router();

// @route   POST /api/contact
// @desc    Submit a new contact form
// @access  Public
router.post("/", createContact);

// @route   GET /api/contact
// @desc    Get all contact form submissions
// @access  Private (Admin only)
router.get("/", getContacts);

export default router;
