import React from "react";
import CalCalc from "../calCalc/CalCalc";
import MealFetch from "../MealFetch/MealFetch";

function MealGen() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "3px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "75vw",
          borderRadius: "3px",
        }}
      >
        <CalCalc></CalCalc>
        <MealFetch></MealFetch>
      </div>
    </div>
  );
}

export default MealGen;
