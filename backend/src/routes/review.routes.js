const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth.middleware");
const {reviews }= require("../controllers/review.controller");

router.post("/",protect,reviews);

module.exports = router;