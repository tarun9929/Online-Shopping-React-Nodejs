import express from "express";
import { registerUser } from "../controllers/users.controllers.js";

const router = express.Router();

router.route("/api/v1/users/register").post(registerUser);

export default router;
