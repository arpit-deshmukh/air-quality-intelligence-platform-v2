import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    name: String,
    price: Number,
    quantity: {
      type: Number,
      required: true,
      min: 1
    }
  },
  { _id: false }
);

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },
    guestId: {
      type: String,
      default: null
    },
    items: [cartItemSchema]
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);