import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  function toggleDarkMode() {
    const root = document.documentElement;
    root.classList.toggle("dark");
  }

  return (
    <nav className="nav navbar navbar-expand-md bg-body-light sticky-top">
      <div class="container-fluid">
        <Link className="link1" to="/">
          <img className="logo" src={logo} alt="img" />
          <h2>CricketMaster</h2>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse mt-3 ms-3" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">

          
          <Link className="link me-3" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="link me-3" to="/matches">
            <h3>Matches</h3>
          </Link>
          <Link className="link me-3" to="/videos">
            <h3>Videos</h3>
          </Link>
          <Link className="link me-3" to="/venues">
            <h3>Venues</h3>
          </Link>
          <Link className="link me-3" to="/Teams">
            <h3>Teams</h3>
          </Link>
         </div>

          <div className="dropdown navbar-nav me-auto">
            <h3 className="more">More</h3>
            <div className="dropdown-content">
              <Link className="link" to="/photos">
                <h3>Photos</h3>
              </Link>
              <Link className="link" to="/profile">
                <h3>Profile</h3>
              </Link>
              <Link className="link" to="/Login">
                <h3>Login</h3>
              </Link>
              <Link className="link" to="/register">
                <h3>Signup</h3>
              </Link>
              <Link className="link" to="/logout">
                <h3>Logout</h3>
              </Link>
              <Link className="link" to="/contact">
                <h3>Contact Us</h3>
              </Link>
            </div>
          </div>
          
        </div>

        <div className="themeBtn">
          <button className="ThemeButton" onClick={toggleDarkMode}></button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
