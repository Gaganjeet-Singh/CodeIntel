const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes.js");
const userRoutes = require("./routes/user.routes.js");
const reviewRoutes = require("./routes/review.routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/review",reviewRoutes);

app.get("/", (req, res) => {
  res.send("CodeIntel backend running 🚀");
});

module.exports = app;
