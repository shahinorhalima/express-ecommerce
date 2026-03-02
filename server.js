import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

// doten config
dotenv.config();

// port
const PORT = process.env.PORT || 6060;

// app init
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes

// server liten
app.listen(PORT, () => {
  connectDb();
  console.log(`server is running port ${PORT}`);
});
