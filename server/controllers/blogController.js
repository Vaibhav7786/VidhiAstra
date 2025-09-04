// controllers/blogController.js
import Blog from '../models/Blog.js';

// @desc    Add a new blog post
// @route   POST /api/blogs
// @access  Private (Admin only)
export const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '/public/placeholder.svg';

    const newBlog = new Blog({
      title,
      content,
      author: author || 'Advocate Shubham Patidar',
      image,
    });

    await newBlog.save();
    res.status(201).json({ message: 'Blog post created successfully!', blog: newBlog });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get all blog posts
// @route   GET /api/blogs
// @access  Public
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get a single blog post by ID
// @route   GET /api/blogs/:id
// @access  Public
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ msg: 'Blog post not found' });
    }

    res.json(blog);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Blog post not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Update a blog post by ID
// @route   PUT /api/blogs/:id
// @access  Private (Admin only)
export const updateBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    let image = req.body.image; // keep existing if not new file

    if (req.file) {
      image = `/uploads/${req.file.filename}`; // update if new file uploaded
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, author, image, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ msg: 'Blog post not found' });
    }

    res.json({ message: 'Blog post updated successfully!', blog: updatedBlog });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Blog post not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a blog post by ID
// @route   DELETE /api/blogs/:id
// @access  Private (Admin only)
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ msg: 'Blog post not found' });
    }

    res.json({ message: 'Blog post removed successfully!' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Blog post not found' });
    }
    res.status(500).send('Server Error');
  }
};
