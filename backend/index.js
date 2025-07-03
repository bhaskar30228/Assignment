import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/AuthRoutes.js";
import connectDb from "./config/Db.js";
import cors from "cors";

dotenv.config();
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS configuration
const allowedOrigins = [
  "https://assignment-1v95.vercel.app",
  "http://localhost:5173"
];

app.use(cors({
  origin: ['https://assignment-1v95.vercel.app'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Database connection
connectDb();

// Routes
app.use("/auth", authRouter);

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});