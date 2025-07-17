import express from "express";
import { Router } from "express";
const router = Router();
import { userSignUp, userLogin } from "../controller/userController.js";

// Make sure all routes are properly defined
router.post("/signup", userSignUp);  // No trailing slashes
router.post("/signin", userLogin);   // No malformed parameters

export default router;