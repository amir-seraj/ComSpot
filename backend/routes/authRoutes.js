import express from "express";
import { postRegister, postLogin } from "../controllers/auth/authController.js";

const router = express.Router();

router.post("/register", postRegister);

router.post("/login", postLogin);

export default router;
