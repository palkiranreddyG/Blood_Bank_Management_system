require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

const app = express();

// DB connection
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve uploaded files (Admin ID proofs)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));         // Login route
app.use('/api/register', require('./routes/register'));       // User & Admin registration routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
app.use('/api/auth', require('./routes/authRoutes'));
