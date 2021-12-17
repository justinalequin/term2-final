import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";

import "./App.css";
import MealList from "./components/MealList/MealList";
import Nav from "./components/Nav/Nav";
import CalCalc from "./components/calCalc/CalCalc";
import ProtectedHome from "./components/ProtectedHome/ProtectedHome";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/Profile/Profile";
import Favorites from "./components/Favorites/Favorites";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import MealFetch from "./components/MealFetch/MealFetch";
import MealGen from "./components/MealGen/MealGen";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let jwtToken = window.localStorage.getItem("jwtToken");
    console.log(jwtToken);

    if (jwtToken) {
      let decodedToken = jwtDecode(jwtToken);
      console.log(decodedToken);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        window.localStorage.removeItem("jwtToken");
        setUser(null);
      } else {
        setUser({
          email: decodedToken.email,
          userName: decodedToken.userName,
        });
      }
    }
  }, []);

  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <Router>
        <Nav></Nav>

        <Routes>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin setUser={setUser} />} />
          <Route
            path="/protected-home"
            element={
              <PrivateRoute>
                <ProtectedHome />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/protected/favorites"
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />

          <Route path="/" element={<MealGen></MealGen>} />
          <Route render={() => <h1>Not Found 404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
