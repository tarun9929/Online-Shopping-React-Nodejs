import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  access_duration,
  refresh_duration,
  secret_access_token,
  secret_refresh_token,
} from "../config/dotenv.config.js";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    refreshToken: String,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // Hash the password before saving

    this.password = await bcrypt.hash(this.password, 10);
    next();
  }

  next();
});

userSchema.methods.isPasswordCurrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getAccessToken = function (payload) {
  return jwt.sign(payload, secret_access_token, access_duration);
};

userSchema.methods.getRefreshToken = function (payload) {
  return jwt.sign(payload, secret_refresh_token, refresh_duration);
};

const User = mongoose.model("User", userSchema);

export default User;
