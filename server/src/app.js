import express from "express";
import cors from "cors";
import { cors_origin } from "./config/dotenv.config.js";
import userRouter from "./routes/users.routes.js";

const app = express();

// middlewares

app.use(
  cors({
    origin: cors_origin,
    allowedHeaders: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

// routes
app.use(userRouter);

// test routes
app.get("/api/v1/test", (req, res) => {
  const users = [
    {
      name: "Tarun Didwaniya",
      email: "tarundidwaniya4@gmail.com",
      age: 23,
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      age: 30,
    },
  ];

  res.status(200).json(users);
});

export default app;
