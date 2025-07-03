import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/AuthRoutes.js";
import connectDb from "./config/Db.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';

// Initialize
dotenv.config();
const app = express();

// Proper __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Validate required environment variables
const requiredEnvVars = ['CONNECTION_URI', 'SECRET_KEY'];
requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    console.error(`Missing required environment variable: ${varName}`);
    process.exit(1);
  }
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Only need this once

// CORS Configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true
}));

// Connect to Database
connectDb().then(() => {
  console.log("Database connected successfully");
}).catch(err => {
  console.error("Database connection failed:", err);
});

// API Routes
app.use("/api/auth", authRouter); // Changed to /api prefix
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

// Serve static files (production only)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "client/dist")));
  
  // Handle SPA routing - must come last
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});