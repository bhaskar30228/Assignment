import express from "express";
const router = express.Router();
import { userSignUp, userLogin } from "../controller/userController.js";

// Use consistent route naming (lowercase)
router.post("/signup", userSignUp);
router.post("/signin", userLogin);
export default router;