import mongoose from "mongoose";

export const connectDatabase = async () => {
  console.log("Trying to connect to MongoDB...");
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected!");
  } catch (err) {
    console.log("MongoDB connection error:", err.message);
  }
};