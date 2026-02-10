import { Category } from "../models/Category.js";

export const createCategory = async (req, res) => {
  try {
    const { name, slug } = req.body;

    const exists = await Category.findOne({ slug });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Category already exists"
      });
    }

    const category = await Category.create({ name, slug });

    res.status(201).json({
      success: true,
      category
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json({ success: true, categories });
};
