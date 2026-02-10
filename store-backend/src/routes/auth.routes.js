import express from "express";
import { User } from "../models/User.js";
import { generateToken } from "../utils/token.js";

const router = express.Router();


router.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const user = await User.create({ email, password });

    res.status(201).json({
      success: true,
      token: generateToken(user._id)
    });
  } catch (error) {
    next(error);
  }
});

// Login
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    res.json({
      success: true,
      token: generateToken(user._id)
    });
  } catch (error) {
    next(error);
  }
});

export default router;