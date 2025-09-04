// models/Blog.js
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    default: 'Advocate Shubham Patidar', // Default author
  },
  image: {
    type: String,
    trim: true,
    default: '/public/placeholder.svg', // Placeholder image
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update 'updatedAt' field before save
blogSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
