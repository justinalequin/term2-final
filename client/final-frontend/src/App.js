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

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>

        <hr />

        <CalCalc></CalCalc>

        <hr />

        <MealFetch></MealFetch>
        <Routes>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
