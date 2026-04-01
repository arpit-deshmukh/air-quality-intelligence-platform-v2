import { Product } from "../models/Product.js";

export async function getProducts(req, res, next) {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const products = await Product.find({
      status: "active",
      isDeleted: false
    })
      .populate("category", "name slug")
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await Product.countDocuments({
      status: "active",
      isDeleted: false
    });

    res.json({
      success: true,
      page,
      total,
      products
    });
  } catch (error) {
    next(error);
  }
}

export async function getProductBySlug(req, res, next) {
  try {
    const product = await Product.findOne({
      slug: req.params.slug,
      status: "active",
      isDeleted: false
    }).populate("category", "name slug");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    res.json({
      success: true,
      product
    });
  } catch (error) {
    next(error);
  }
}

export async function createProduct(req, res, next) {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product
    });
  } catch (error) {
    next(error);
  }
}