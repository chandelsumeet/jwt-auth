import express from "express";
import mongoose from "mongoose";
import dotenv from "@dotenvx/dotenvx";
import UserModel from "./models/user.js";
import authRouter from "./routes/auth.js";
import postRouter from "./routes/post.js";
dotenv.config();
const app = express();

const MONGO_CONNECTION_URL = process.env.MONGO_CONNECTION_URL;
const DB_NAME = process.env.DATABASE_NAME;

mongoose.connect(MONGO_CONNECTION_URL, { dbName: DB_NAME });

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(express.json(), authRouter, postRouter);

app.listen(3000, () => {
  console.log("server running on 3000");
});
