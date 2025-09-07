// server.js
import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import authRoutes from './routes/authRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

// Load environment variables
dotenv.config({ path: './.env' });

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors({
  origin: [
    'https://cc28a91f-adb9-4940-a084-00adc71723e4-00-2moxppmayxvnj.worf.replit.dev',
    'http://localhost:5000',
    'https://localhost:5000'
  ],
  credentials: true
}));
app.use(express.json());

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/admin', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/upload', uploadRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Vidhi Astra Backend API is running!');
});

// Server listen
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
