import React from "react";
import { Link } from "react-router-dom";
import MealHooks from "../Hooks/MealHooks";
import axios from "axios";

function ProtectedHome() {
  let [, setMealInput, mealArray, setSubmit] = MealHooks();

  async function handleAddToFavorite() {
    try {
      let payload = await axios.post(
        `http://localhost:3001/api/users/meals/add-meal`,
        {
          tittle: "",
          mealImage: "",
          rating: "",
        },
        {
          headers: {
            authorization: `Bearer ${window.localStorage.getItem("jwtToken")}`,
          },
        }
      );
      console.log(payload);
    } catch (e) {
      console.log(e.response);
    }
  }

  function handleMealSubmit() {
    setSubmit(true);
  }

  return (
    <div>
      <h1 style={{ color: "white" }}>HOME</h1>
      <div>
        <input onChange={(e) => setMealInput(e.target.value)} />
        <button onClick={handleMealSubmit}>Submit</button>
      </div>
      <div className="meal-div">
        {mealArray.map((item) => {
          return (
            <div key={item}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to={{
                  pathname: `/meal-detail/${item.data}`,
                  search: `?t=${item.data}`,
                }}
              >
                <div>
                  <img src={item.data} alt={item.data} />
                </div>
                <div>
                  Title: {item.data}
                  <br />
                  Prep:{item.data}
                </div>

                <div>Score: {item.data}</div>
                <br></br>
              </Link>
              <button
                style={{
                  backgroundColor: "red",
                  fontSize: "15px",
                  fontWeight: "boldest",
                  color: "123321",
                }}
                onClick={() => handleAddToFavorite(item.data)}
              >
                ADD FAVORITES
              </button>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}

export default ProtectedHome;
