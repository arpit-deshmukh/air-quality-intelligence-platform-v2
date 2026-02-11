import { Order } from "../models/Order.js";
import { Cart } from "../models/Cart.js";


export async function createOrder(req, res, next) {
  try {
    const { guestId } = req.body;

    const cart = await Cart.findOne(
      req.user ? { user: req.user._id } : { guestId }
    );

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty"
      });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = await Order.create({
      user: req.user?._id || null,
      guestId: guestId || null,
      items: cart.items,
      totalAmount
    });

    // Clear cart after order creation
    cart.items = [];
    await cart.save();

    res.status(201).json({
      success: true,
      order
    });
  } catch (error) {
    next(error);
  }
}


export async function getOrders(req, res, next) {
  try {
    const orders = await Order.find(
      req.user ? { user: req.user._id } : { guestId: req.query.guestId }
    ).sort({ createdAt: -1 });

    res.json({
      success: true,
      orders
    });
  } catch (error) {
    next(error);
  }
}