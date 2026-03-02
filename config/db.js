import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    const connection = await mongoose.connect(process.env.MONGO_STRING);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error("Full error:", error);
  }
};

export default connectDb;
