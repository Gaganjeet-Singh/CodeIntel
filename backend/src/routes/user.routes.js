const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth.middleware");
const User = require("../models/User");

router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.json(user);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
