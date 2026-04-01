// src/app.js
import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import aqiRoutes from "./modules/aqi/routes/aqiRoutes.js";
import exploreRoutes from "./modules/explore/routes/exploreRoutes.js";
import metaRoutes from "./modules/meta/routes/metaRoutes.js";
import cartRoutes from "./routes/cart.js";
import productRoutes from "./routes/products.js";

import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"]
}));

// root 
app.get("/", (req, res) => {
  res.json({ message: "AQI Backend is running " });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/aqi", aqiRoutes);
app.use("/api/explore", exploreRoutes);
app.use("/api/meta", metaRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/products", productRoutes);

// Error handler
app.use(errorHandler);

export default app;
