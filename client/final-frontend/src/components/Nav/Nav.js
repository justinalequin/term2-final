import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ user, setUser }) {
  let linkTittle1 = user ? user.userName : "Sign up";
  let link1 = user ? "/profile" : "/sign-up";

  let linkTittle2 = user ? "Logout" : "Sign in";
  let link2 = user ? "/" : "/Sign-in";
  console.log(user);

  let logoutBotton = user ? logout : () => {};

  function logout() {
    setUser(null);
    window.localStorage.removeItem("jwtToken");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/protected-home" className="navbar-brand" href="#">
          <h1>Meal Plan App</h1>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={link1} className="nav-link active" aria-current="page">
                <h2>{linkTittle1}</h2>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={link2}
                className="nav-link"
                onClick={() => logoutBotton()}
              >
                <h2>{linkTittle2}</h2>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/protected/favorites"} className="nav-link">
                <h2>Favorites</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
