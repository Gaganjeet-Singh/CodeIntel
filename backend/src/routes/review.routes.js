const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth.middleware");
const { reviews } = require("../controllers/review.controller");
const Review = require("../models/Review");   // 🔥 MISSING LINE

router.post("/", protect, reviews);

router.get("/my", protect, async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.userId })
      .sort({ createdAt: -1 });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
});

module.exports = router;
