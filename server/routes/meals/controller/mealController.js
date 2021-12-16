const Meals = require("../model/Meal");
const User = require("../../users/model/User");

async function getAllFavoriteMeals(req, res) {
  try {
    const decodedData = res.locals.decodedData;

    let foundUser = await User.findOne({ email: decodedData.email });

    let allFavoriteMeals = await Meals.find({ user: foundUser._id });

    res.json({ message: "Success", payload: allFavoriteMeals });
  } catch (e) {
    res.status(500).json(errorHandler(e));
  }
}

async function addMeal(req, res) {
  const { title, image, mealID } = req.body;

  try {
    const decodedData = res.locals.decodedData;

    let foundUser = await User.findOne({ email: decodedData.email });

    const createdMeal = new Meals({
      title,
      image,
      mealID,
      MealOwner: foundUser._id,
    });

    let savedMeal = await createdMeal.save();

    foundUser.mealHistory.push(savedMeal._id);

    await foundUser.save();

    return res.json({ message: "Success", payload: savedMeal });
  } catch (e) {
    res.status(500).json(errorHandler(e));
  }
}

async function deleteFavoriteMeal(req, res) {
  try {
    let deletedMeal = await Meals.findByIdAndRemove(req.params.id);

    if (!deletedMeal) {
      return res
        .status(404)
        .json({ message: "Error", error: "Meal not found" });
    } else {
      const decodedData = res.locals.decodedData;

      let foundUser = await User.findOne({ email: decodedData.email });

      let userMeals = foundUser.mealHistory;

      let userMealsHistory = userMeals.filter(
        (item) => item._id.toString() !== req.params.id
      );

      foundUser.mealHistory = userMealssHistory;

      await foundUser.save();

      res.json({ message: "Deleted", payload: deletedMeal });
    }
  } catch (e) {
    res.status(500).json(errorHandler(e));
  }
}

module.exports = {
  getAllFavoriteMeals,
  addMeal,
  deleteFavoriteMeal,
};
