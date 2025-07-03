import express from "express";
const router = express.Router();
import { userSignUp, userLogin } from "../controller/userController.js";

// Use absolute paths and consistent naming
router.post("/api/auth/signup", userSignUp);
router.post("/api/auth/signin", userLogin);

export default router;