import express from "express";
import cors from "cors";
import { isValidTitle, formatPrice } from "./utils/validate.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL || "*" }));

// Required health route (B-T3)
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;