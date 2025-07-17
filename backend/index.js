import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/AuthRoutes.js";
import connectDb from "./config/Db.js";
import cors from "cors";

dotenv.config();
const app = express();

// ✅ Correct CORS Configuration — place this BEFORE other middleware
const allowedOrigins = [
  "https://assignment-1v95.vercel.app", // your Vercel frontend
  "http://localhost:5173"               // for local development
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("❌ CORS blocked for origin:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  optionsSuccessStatus: 200,
};

// ✅ CORS must be first
app.use(cors(corsOptions));

// ✅ Body parsers (after CORS)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Connect to database
connectDb();

// ✅ Routes
app.use("/auth", authRouter);

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// ✅ Test route to check CORS from frontend
app.get("/test-cors", (req, res) => {
  res.json({ success: true, message: "CORS is working!" });
});

// ✅ Error handler for CORS issues and others
app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ error: "CORS policy blocked this request" });
  }
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
