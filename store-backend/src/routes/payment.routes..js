import express from "express";
import {
  initiatePayment,
  confirmPayment
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/initiate", initiatePayment);
router.post("/confirm", confirmPayment);

export default router;