import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Meal.css";

export default function Meal({ meal }) {
  const [image, setImage] = useState("");
  const [score, setScore] = useState("");
  const [likes, setLikes] = useState("");

  useEffect(() => {
    fetchMealImage();
  }, [meal.id]);

  async function fetchMealImage() {
    try {
      //Picture's request is returning undefined. Check again once the API KEY unlocks for the day. Getting promise with data.
      let payload = await axios.get(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=15723cdbceaf4152bada86c5f317e672&includeNutrition=false`
      );

      console.log(payload.data);
      setImage(payload.data.image);
      setScore(payload.data.spoonacularScore);
      setLikes(payload.data.aggregateLikes);
    } catch (e) {
      console.log(e.message);
    }
  }

  console.log(meal);

  return (
    <div className="mains">
      <div className="titleContainer">
        {" "}
        <h3>{meal.title}</h3>
      </div>

      <img src={image} alt="recipe" />
      <ul className="instructions">
        <li>Prep time: {meal.readyInMinutes}</li>
        <li>Serving: {meal.servings}</li>
      </ul>
      <button>ADD TO FAVORITES</button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();

          window.open(meal.sourceUrl, "_blank");
        }}
      >
        {" "}
        GO TO RECIPE
      </button>
    </div>
  );
}
