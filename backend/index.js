import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/Db.js";
import authRoutes from "./routes/AuthRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = [
  "http://localhost:5173",
  "https://assignment-717x.vercel.app",
];

// Enable CORS for all routes
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Handle OPTIONS requests
app.options('*', cors());

app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// DB + Server
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});