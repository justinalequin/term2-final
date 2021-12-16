const express = require("express");
const router = express.Router();

const {
  getAllFavoriteMeals,
  addMeal,
  deleteFavoriteMeal,
} = require("./controller/mealController");

const { jwtMiddleware } = require("../common/shared/jwtMiddleware");

router.get("/get-meal", jwtMiddleware, getAllFavoriteMeals);

router.post("/add-meal", jwtMiddleware, addMeal);

router.delete("/delete-meal/:id", jwtMiddleware, deleteFavoriteMeal);

module.exports = router;
