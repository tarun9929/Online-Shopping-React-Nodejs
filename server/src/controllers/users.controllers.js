import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/User.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import { generateAuthTokens } from "../utils/utilFunctions.js";
import { cors_origin } from "../config/dotenv.config.js";

export const registerUser = asyncHandler(async (req, res) => {
  if (!req.body) throw new ApiError("All fields are required", 400);

  const { email, password } = req.body;

  if (!email || !password) throw new ApiError("All fields are required", 400);

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new ApiError("User Already Exists", 409);
  }

  const user = await User.create({
    email,
    password,
  });

  const token = await generateAuthTokens(user._id);
  const httpOptions = {
    httpOnly: true,
    secure: true, // only send over HTTPS
    sameSite: "strict", // helps prevent CSRF
    maxAge: 24 * 60 * 60 * 1000, // optional: expires in 1 day
  };

  res.cookie("refresh_token", token.refresh_token, httpOptions);

  return res
    .setHeader("x-auth-token", token.access_token)
    .status(201)
    .json(new ApiResponse("Success", 201, { id: user._id }));
});

export const login = asyncHandler(async (req, res) => {
  if (!req.body) throw new ApiError("All fields must required");

  const { email, password } = req.body;

  if (!email || !password) throw new ApiError("All fields must required");

  const user = await User.findOne({ email });

  if (!user) throw new ApiError("Invalid email", 401);

  const isCurrect = await user.isPasswordCurrect(password);

  if (!isCurrect) throw new ApiError("Invalid Password", 401);

  const token = await generateAuthTokens(user._id);
  const httpOptions = {
    httpOnly: true,
    secure: true, // only send over HTTPS
    sameSite: "strict", // helps prevent CSRF
    maxAge: 24 * 60 * 60 * 1000, // optional: expires in 1 day
  };

  res.setHeader("access_token", token.access_token);

  res.cookie("refresh_token", token.refresh_token, httpOptions);

  return res
    .status(200)
    .json(new ApiResponse("Success", 200, { _id: user._id }));
});
