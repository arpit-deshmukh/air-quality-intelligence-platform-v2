import express from "express";
import {
  createOrder,
  getOrders
} from "../controllers/order.controller.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", createOrder);

router.get("/", protect, getOrders);

export default router;