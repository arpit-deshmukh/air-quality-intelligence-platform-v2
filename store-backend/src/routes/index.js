import express from "express";
import authRoutes from "./auth.routes.js";

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({ status: "ok", service: "AQI Store API" });
});

router.use("/auth", authRoutes);

export default router;