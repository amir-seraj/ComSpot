import express from "express";
import { postRegister, postLogin } from "../controllers/auth/authController.js";
import Joi from "joi";
import validator from "express-joi-validation";
import verifyToken from "./../middlewares/auth.js";

const authValidator = validator.createValidator({});

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});
const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});
const router = express.Router();

router.post("/register", authValidator.body(registerSchema), postRegister);

router.post("/login", authValidator.body(loginSchema), postLogin);

router.get("/test", verifyToken, (req, res) => {
  res.send("token passed");
});
export default router;
