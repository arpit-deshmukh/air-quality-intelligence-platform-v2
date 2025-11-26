// src/app.js
import express from "express";
import cors from "cors";

import aqiRoutes from "./modules/aqi/routes/aqiRoutes.js";
import exploreRoutes from "./modules/explore/routes/exploreRoutes.js";
import metaRoutes from "./modules/meta/routes/metaRoutes.js";

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
app.use("/api/aqi", aqiRoutes);
app.use("/api/explore", exploreRoutes);
app.use("/api/meta", metaRoutes);

// Error handler
app.use(errorHandler);

export default app;
