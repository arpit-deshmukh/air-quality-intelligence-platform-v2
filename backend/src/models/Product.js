import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    description: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },

    inventory: {
      type: Number,
      default: null
    },

    status: {
      type: String,
      enum: ["draft", "active", "archived"],
      default: "draft"
    },

    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);