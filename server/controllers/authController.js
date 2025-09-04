// controllers/authController.js
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

// Generate JWT
const generateToken = (admin) => {
  return jwt.sign(
    {
      id: admin._id,
      email: admin.email,
      username: admin.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' } // Token expires in 1 hour
  );
};

// @desc    Register a new admin
// @route   POST /api/auth/register
// @access  Public (⚠️ Should be secured/removed in production)
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    if (!name || !email || !username || !password) {
      return res.status(400).json({ message: 'Please enter all fields' });
    }

    // Check if admin already exists
    let adminExists = await Admin.findOne({ username });
    if (adminExists) {
      return res.status(400).json({ message: 'Admin already exists' });
    }
    adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create admin
    const admin = await Admin.create({
      name,
      email,
      username,
      password, // Will be hashed by pre-save hook
    });

    if (admin) {
      res.status(201).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        username: admin.username,
        token: generateToken(admin),
        message: 'Admin registered successfully. ⚠️ Please secure/remove this route in production!',
      });
    } else {
      res.status(400).json({ message: 'Invalid admin data' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Authenticate an admin
// @route   POST /api/auth/login
// @access  Public
export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check for admin username
    const admin = await Admin.findOne({ username });

    if (admin && (await admin.matchPassword(password))) {
      res.json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        username: admin.username,
        token: generateToken(admin),
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
