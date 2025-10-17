import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/User.model.js";

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

  res.status(200).json({
    statusCode: 200,
    status: "success",
    data: user,
    success: true,
  });
});
