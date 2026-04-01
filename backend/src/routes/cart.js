import express from "express";
import {
  getUserCart,
  addToCart,
  updateCartItem,
  removeCartItem
} from "../controllers/cart.controller.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getUserCart);
router.post("/add", addToCart);
router.put("/update", updateCartItem);
router.delete("/remove/:productId", removeCartItem);

export default router;