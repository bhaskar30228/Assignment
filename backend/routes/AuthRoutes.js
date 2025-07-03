import express from "express"
const authRouter=express.Router()
import { userSignUp,userLogin} from "../controller/userController.js"
authRouter.post("/signUp",userSignUp)
authRouter.post("/signIn",userLogin)
export default authRouter
