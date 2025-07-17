import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

// CORS setup
const allowedOrigins = [
  "http://localhost:5173", // local frontend
  "https://assignment-1v95.vercel.app" // your deployed frontend
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use("/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
