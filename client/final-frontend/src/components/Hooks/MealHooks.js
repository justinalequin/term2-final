import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

function MealHooks() {
  const [mealInput, setMealInput] = useState("");
  const [mealArray, setMealArray] = useState([]);

  const [submit, setSubmit] = useState(false);
  const { search } = useLocation();

  const navigate = useNavigate();

  return [mealInput, setMealInput, mealArray, setSubmit];
}

export default MealHooks;
