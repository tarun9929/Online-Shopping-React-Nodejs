import express from "express";
import { registerUser , login } from "../controllers/users.controllers.js";

const router = express.Router();

router.route("/api/v1/users/register")
.post(registerUser);

router.route("/api/v1/users/login")
.post(login)

export default router;
