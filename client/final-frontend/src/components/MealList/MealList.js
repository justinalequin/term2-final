import React from "react";
import Meal from "../Meal/Meal";
import "./MealList.css";

export default function MealList({ mealData }) {
  console.log(mealData);
  console.log(mealData.data.nutrients);

  return (
    <>
      <div className="macrosmacros">
        <div className="macros">
          <h1>Macros</h1>
          <ul className="macroList">
            <li>Calories: {mealData.data.nutrients.calories}</li>
            <li>Fat: {mealData.data.nutrients.fat}</li>
            <li>Protein: {mealData.data.nutrients.protein}</li>
            <li>Carbs: {mealData.data.nutrients.carbohydrates}</li>
          </ul>
        </div>
        <div className="mealsmeals">
          <div className="meals">
            {mealData.data.meals.map((meal) => {
              return <Meal key={meal.id} meal={meal} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
