import React, { useState } from "react";
import axios from "axios";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2500);

  async function getKetoMealPlan() {
    try {
      let payload = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=15723cdbceaf4152bada86c5f317e672&timeFrame=day&targetCalories=${calories}&diet=ketogenic`
      );
      setMealData(payload);
      console.log(mealData);
    } catch (e) {
      console.log(e);
    }
  }

  async function getVeganMealPlan() {
    try {
      let payload = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=15723cdbceaf4152bada86c5f317e672&timeFrame=day&targetCalories=${calories}&diet=vegan`
      );
      setMealData(payload);
      console.log(mealData);
    } catch (e) {
      console.log(e);
    }
  }

  async function getVegetarianMealPlan() {
    try {
      let payload = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=15723cdbceaf4152bada86c5f317e672&timeFrame=day&targetCalories=${calories}&diet=vegetarian`
      );
      setMealData(payload);
      console.log(mealData);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <h1>MEAL PLANNER</h1>
      <br />
      <h2>Please select your type of diet</h2>

      <button onClick={getKetoMealPlan}>GET KETO DAILY MEAL PLAN</button>
      <button onClick={getVeganMealPlan}>GET VEGAN DAILY MEAL PLAN</button>
      <button onClick={getVegetarianMealPlan}>
        GET VEGETARIAN DAILY MEAL PLAN
      </button>
      <br />
    </div>
  );
}

export default App;
