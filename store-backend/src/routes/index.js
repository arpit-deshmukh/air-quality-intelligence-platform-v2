import express from "express";
import authRoutes from "./auth.routes.js";
import productRoutes from "./product.routes.js";
import cartRoutes from "./cart.routes.js";
import categoryRoutes from "./category.routes.js";

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({ status: "ok", service: "AQI Store API" });
});

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/categories", categoryRoutes);

export default router;
