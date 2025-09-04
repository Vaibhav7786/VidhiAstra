import express from 'express';
import {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

// @route   POST /api/blogs
// @desc    Add a new blog post
// @access  Private (Admin only) - requires image upload
router.post('/', protect, upload.single('image'), createBlog);

// @route   GET /api/blogs
// @desc    Get all blog posts
// @access  Public
router.get('/', getBlogs);

// @route   GET /api/blogs/:id
// @desc    Get a single blog post by ID
// @access  Public
router.get('/:id', getBlogById);

// @route   PUT /api/blogs/:id
// @desc    Update a blog post by ID
// @access  Private (Admin only) - allows optional image upload
router.put('/:id', protect, upload.single('image'), updateBlog);

// @route   DELETE /api/blogs/:id
// @desc    Delete a blog post by ID
// @access  Private (Admin only)
router.delete('/:id', protect, deleteBlog);

export default router;
