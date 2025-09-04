import express from 'express';
import upload from '../middleware/uploadMiddleware.js';
import { uploadLogo } from '../controllers/uploadController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   POST /api/upload/logo
// @desc    Upload a website logo
// @access  Private (Admin only)
router.post('/logo', protect, upload.single('logo'), uploadLogo);

export default router;
