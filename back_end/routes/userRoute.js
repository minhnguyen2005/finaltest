import express from "express";
import { loginUser,signUp } from "../controllers/userController";

const userRouter = express.Router()

userRouter.post("/signup", signUp);
userRouter.post("login", loginUser);

export default userRouter;