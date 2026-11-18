import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./backend/.env" });

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI ? process.env.MONGODB_URI.trim() : "";

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI environment variable");
  process.exit(1);
}

try {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB Atlas");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (err) {
  console.error("Database connection error:", err);
}