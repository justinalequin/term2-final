import React from "react";

function CalCalc() {
  return (
    <div className="calCalcMain">
      <h1>Calorie Calculator</h1>

      <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
      </div>

      <h3>Please enter your weight below.</h3>

      <input
        style={{ textAlign: "center" }}
        type="number"
        placeholder="Please enter your weight in lbs"
      />

      <h3>Please enter your height below.</h3>

      <input
        style={{ textAlign: "center" }}
        type="number"
        placeholder="Please enter your height in inches"
      />

      <h3>Please enter your age below.</h3>

      <input
        style={{ textAlign: "center" }}
        type="number"
        placeholder="Please enter your age"
      />

      <select className="activityLevel" name="activityLevel">
          <option value="1.2">Little or No Exercise</option> 
        <option value="1.375">Lightly Active</option>
        <option value="1.55">Moderately Active</option>
        <option value="1.725">Very Active</option>
        <option value="1.9">Extra Active</option>
      </select>
    </div>
  );
}

export default CalCalc;
