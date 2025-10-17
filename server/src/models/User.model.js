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

const User = mongoose.model("User", userSchema);

User.pre("save", function (next) {
  if (this.isModifed("password")) {
    // Hash the password before saving

    this.password = bcrypt.hash(this.password, 10);
    next();
  }

  next();
});

User.methods.isPasswordCurrect = function (password) {
  return bcrypt.compare(password, this.password);
};

User.methods.accessToken = function (payload) {
  return jwt.sign(payload, secret_access_token, access_duration);
};

User.methods.refreshToken = function (payload) {
  return jwt.sign(payload, secret_refresh_token, refresh_duration);
};

export default User;
