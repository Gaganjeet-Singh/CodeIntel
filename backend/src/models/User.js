// src/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: false,
      unique: true,
      sparse: true
    },

    password: {
      type: String,
      required: false
    },

    githubId: {
      type: String,
      unique: true,
      sparse: true
    },

    provider: {
      type: String,
      enum: ["local", "github"],
      default: "local"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
