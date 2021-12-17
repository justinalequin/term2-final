import React from "react";
import CalCalc from "../calCalc/CalCalc";
import MealFetch from "../MealFetch/MealFetch";

function MealGen() {
  return (
    <div>
      <CalCalc></CalCalc>
      <MealFetch></MealFetch>
    </div>
  );
}

export default MealGen;
