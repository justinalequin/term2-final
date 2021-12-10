import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import MealList from "./components/MealList/MealList";
import Nav from "./components/Nav/Nav";

//Get radio buttons to select only one option and switch on click. Create login and signup pages. Create favorite meals page.

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2500);
  const [diet, setDiet] = useState("ketogenic");

  async function getMealPlan() {
    try {
      let payload = await axios.get(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=15723cdbceaf4152bada86c5f317e672&timeFrame=day&targetCalories=${calories}&diet=${diet}`
      );
      setMealData(payload);
      console.log(mealData);
      console.log(diet);
    } catch (e) {
      console.log(e);
    }
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function onChangeValue(e) {
    console.log(e.target.value);
    setDiet(e.target.value);
  }

  // function handleSubmit() {
  //   try {
  //     let payload = await axios.get(
  //       `https://api.spoonacular.com/mealplanner/generate?apiKey=15723cdbceaf4152bada86c5f317e672&timeFrame=day&targetCalories=${calories}&diet=${diet}`
  //     );
  //     setMealData(payload);
  //     console.log(mealData);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  return (
    <div className="App">
      <Nav></Nav>

      <hr />
      <div className="top">
        <br />
        <h2>Please enter your daily caloric goal</h2>
        <input
          style={{ textAlign: "center" }}
          type="number"
          placeholder="Default is 2500 calories."
          onChange={handleChange}
        />
        <h2>Please select your type of diet</h2>
      </div>

      <select className="dietList" name="dietList" onChange={onChangeValue}>
          <option value="Ketogenic">KETOGENIC</option> 
        <option value="Vegetarian">VEGETARIAN</option>
        <option value="Vegan">VEGAN</option>
        <option value="Paleo">PALEO</option>
        <option value="Pescetarian">PESCETARIAN</option>
        <option value="Primal">PRIMAL</option>
      </select>

      <div className="buttons">
        <button onClick={getMealPlan}>GET DAILY MEAL PLAN</button>
      </div>

      <br />
      <div>{mealData && <MealList mealData={mealData} />}</div>
    </div>
  );
}

export default App;
