const Review = require("../models/Review");
const { reviewCode } = require("../services/ai.service");

const reviews = async (req, res) => {
  try {
    const { language, code } = req.body;

    if (!code || !language) {
      return res.status(400).json({
        message: "code and language required"
      });
    }

    const aiReview = await reviewCode({ language, code });

    const result = await Review.create({
      user: req.userId,
      language,
      code,
      feedback: aiReview
    });

     res.status(200).json({
      success: true,
      review: aiReview
    });
  } catch (error) {
    console.error("AI ERROR:", error);
    return res.status(500).json({
      message: "Internal error: AI review failed"
    });
  }
};

module.exports = { reviews };
