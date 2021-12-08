import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="navMain">
      <div className="navTitle">Diet App</div>

      <div className="menuOptions">
        <a>Signup</a>
        <a>Signin</a>
        <a>Favorites</a>
        <a>Random Meal Plan</a>
        <form></form>
      </div>
    </div>
  );
}

export default Nav;
