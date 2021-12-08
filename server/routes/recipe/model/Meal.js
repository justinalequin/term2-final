const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema(
  {
    title: { type: String },
    mealImage: { type: String },
    mealID: { type: String },
    mealOwner: { type: mongoose.Schema.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("meal", mealSchema);
