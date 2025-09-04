import express from "express";
import { registerAdmin, loginAdmin } from "../controllers/authController.js";

const router = express.Router();

// Route to register a new admin (use once for initial setup, then secure/remove)
router.post("/register", registerAdmin);

// Route to login an admin
router.post("/login", loginAdmin);

export default router;
