import React, { useState, useEffect } from "react";
import Collapsible from "react-collapsible";
import "./CalCalc.css";

function CalCalc() {
  const [gender, setGender] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activity, setActivity] = useState(0);
  const [bmr, setBMR] = useState(0);
  const [dailyCals, setDailyCals] = useState(0);

  function handleWeightChange(e) {
    setWeight(e.target.value);
    console.log(weight);
  }

  function handleGenderChange(e) {
    setGender(e.target.value);
    console.log(gender);
  }

  function handleHeightChange(e) {
    setHeight(e.target.value);
    console.log(height);
  }

  function handleActivityChange(e) {
    setActivity(e.target.value);
    console.log(activity);
  }

  function handleAgeChange(e) {
    setAge(e.target.value);
    console.log(age);
  }

  function getBMR() {
    console.log(age);
    console.log(weight);
    console.log(height);
    console.log(gender);
    console.log(activity);

    if (gender === "66") {
      let newWeight = 6.3 * weight;
      let newHeight = 12.9 * height;
      let newAge = 6.8 * age;
      let newBMR = 66 + newWeight + newHeight - newAge;
      let newCalories = newBMR * activity;
      console.log(66 + newWeight + newHeight - newAge);
      setBMR(newBMR);
      console.log(bmr);
      setDailyCals(newCalories);
    } else {
      let newWeight = 4.3 * weight;
      let newHeight = 4.7 * height;
      let newAge = 4.7 * age;
      let newBMR = 655 + newWeight + newHeight - newAge;
      let newCalories = newBMR * activity;
      setBMR(newBMR);
      console.log(bmr);
      setDailyCals(newCalories);
    }
  }

  return (
    <div className="main">
      <Collapsible trigger="▼▼▼▼ Click here to calculate BMR and daily caloric needs ▼▼▼▼">
        <div className="calCalcMain">
          <h1>Calorie Calculator</h1>

          <div onChange={handleGenderChange}>
            <input type="radio" value="66" name="gender" /> Male
            <input type="radio" value="655" name="gender" /> Female
          </div>

          <h3>Please enter your weight below.</h3>

          <input
            style={{ textAlign: "center" }}
            type="number"
            placeholder="Please enter your weight in lbs"
            onChange={handleWeightChange}
          />

          <h3>Please enter your height below.</h3>

          <input
            style={{ textAlign: "center" }}
            type="number"
            placeholder="Please enter your height in inches"
            onChange={handleHeightChange}
          />

          <h3>Please enter your age below.</h3>

          <input
            style={{ textAlign: "center" }}
            type="number"
            placeholder="Please enter your age"
            onChange={handleAgeChange}
          />

          <h3>Please select your activity level below.</h3>

          <select
            className="activityLevel"
            name="activityLevel"
            onChange={handleActivityChange}
          >
             <option value="1.2">Little or No Exercise</option> 
            <option value="1.375">Lightly Active</option>
            <option value="1.55">Moderately Active</option>
            <option value="1.725">Very Active</option>
            <option value="1.9">Extra Active</option>
          </select>
          <br />

          <button onClick={getBMR}>Get Daily Calories</button>
        </div>
        <div className="bottom">
          <div className="calBox">
            <h3>Basal Metabolic Rate (BMR): {bmr}</h3>
            <h3>Daily Calories based on activity level: {dailyCals} </h3>
            <p>
              For healthy weight loss, lower your daily calories by about 500.
            </p>
          </div>
        </div>
      </Collapsible>
    </div>
  );
}

export default CalCalc;
