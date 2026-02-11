import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    name: String,
    price: Number,
    quantity: Number
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
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

    items: [orderItemSchema],

    totalAmount: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      enum: ["CREATED", "CONFIRMED", "PAID", "CANCELLED"],
      default: "CREATED"
    }
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);