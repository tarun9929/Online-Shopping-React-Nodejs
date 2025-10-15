import express from 'express';

const app = express();

// middlewares

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ extended: true ,limit: "16kb"}));

app.use(express.static("public"));

// routes

export default app;