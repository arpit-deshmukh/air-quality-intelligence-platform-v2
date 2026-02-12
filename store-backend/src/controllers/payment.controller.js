import { Order } from "../models/Order.js";
import { createPaymentIntent, verifyPayment } from "../utils/payment.js";

export async function initiatePayment(req, res, next) {
  try {
    const { orderId } = req.body;

    const order = await Order.findById(orderId);
    if (!order || order.status !== "CREATED") {
      return res.status(400).json({
        success: false,
        message: "Invalid order"
      });
    }

    const payment = await createPaymentIntent({
      amount: order.totalAmount,
      orderId: order._id
    });

    order.status = "CONFIRMED";
    await order.save();

    res.json({
      success: true,
      payment
    });
  } catch (error) {
    next(error);
  }
}

export async function confirmPayment(req, res, next) {
  try {
    const isValid = await verifyPayment(req.body);
    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed"
      });
    }

    const order = await Order.findById(req.body.orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    order.status = "PAID";
    await order.save();

    res.json({
      success: true,
      order
    });
  } catch (error) {
    next(error);
  }
}