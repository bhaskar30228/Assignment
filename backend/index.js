import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/AuthRoutes.js"
import connectDb from "./config/Db.js"
import cors from "cors"
dotenv.config()
const app=express()
app.use(express.json())  
app.use(express.static("public"))
app.use(cors())
connectDb()
app.get("/",(req,res)=>{
    res.send("Hello")
})
app.use("/auth",authRouter)
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})
