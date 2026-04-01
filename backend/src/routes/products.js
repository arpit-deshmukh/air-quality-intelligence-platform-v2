import express from "express";
import {
  getProducts,
  getProductBySlug,
  createProduct
} from "../controllers/product.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:slug", getProductBySlug);

router.post("/", protect, createProduct);

export default router;