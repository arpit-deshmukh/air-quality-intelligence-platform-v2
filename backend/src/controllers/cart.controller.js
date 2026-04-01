import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";

async function getCart({ userId, guestId }) {
  let cart = await Cart.findOne(
    userId ? { user: userId } : { guestId }
  );

  if (!cart) {
    cart = await Cart.create({
      user: userId || null,
      guestId: guestId || null,
      items: []
    });
  }

  return cart;
}

export async function getUserCart(req, res, next) {
  try {
    const cart = await getCart({
      userId: req.user?.id,
      guestId: req.query.guestId
    });

    res.json({ success: true, cart });
  } catch (error) {
    next(error);
  }
}

export async function addToCart(req, res, next) {
  try {
    const { productId, quantity = 1, guestId } = req.body;

    const product = await Product.findById(productId);
    if (!product || product.status !== "active") {
      return res.status(404).json({
        success: false,
        message: "Product not available"
      });
    }

    const cart = await getCart({
      userId: req.user?.id,
      guestId
    });

    const item = cart.items.find(
      (i) => i.product.toString() === productId
    );

    if (item) {
      item.quantity += quantity;
    } else {
      cart.items.push({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity
      });
    }

    await cart.save();

    res.json({ success: true, cart });
  } catch (error) {
    next(error);
  }
}

export async function updateCartItem(req, res, next) {
  try {
    const { productId, quantity, guestId } = req.body;

    const cart = await getCart({
      userId: req.user?.id,
      guestId
    });

    const item = cart.items.find(
      (i) => i.product.toString() === productId
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found in cart"
      });
    }

    item.quantity = quantity;
    await cart.save();

    res.json({ success: true, cart });
  } catch (error) {
    next(error);
  }
}

export async function removeCartItem(req, res, next) {
  try {
    const { guestId } = req.query;

    const cart = await getCart({
      userId: req.user?.id,
      guestId
    });

    cart.items = cart.items.filter(
      (i) => i.product.toString() !== req.params.productId
    );

    await cart.save();

    res.json({ success: true, cart });
  } catch (error) {
    next(error);
  }
}