import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import brandRoute from "./routes/brandRoute.js";
import userRoute from "./routes/userRoute.js";

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
app.get("/", (req, res) => {
  res.send("welcome to my api");
});

app.use("/api/brand", brandRoute);
app.use("/api/user", userRoute);

// server liten
app.listen(PORT, () => {
  connectDb();
  console.log(`server is running port ${PORT}`);
});
