import express,{urlencoded} from "express";
import dotenv from "dotenv";
import authRouter from "./routes/AuthRoutes.js";
import connectDb from "./config/Db.js";
import cors from "cors";
import bodyParser from "body-parser"; 

dotenv.config();
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173" 
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

connectDb();

app.use("/auth", authRouter);
app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});


