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
          CricketMaster
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
          <div className="navbar-nav ms-auto mb-3">
            <Link className="link me-3" to="/">Home</Link>
            <Link className="link me-3" to="/matches">Matches</Link>
            <Link className="link me-3" to="/videos">Videos</Link>
            <Link className="link me-3" to="/venues">Venues</Link>
            <Link className="link me-3" to="/Teams">Teams</Link>
          </div>

          <div className="dropdown navbar-nav me-auto">
            <p className="more">More</p>
            <div className="dropdown-content">
              <Link className="link" to="/photos">Photos</Link>
              <Link className="link" to="/profile">Profile</Link>
              <Link className="link" to="/Login">Login</Link>
              <Link className="link" to="/register">Signup </Link>
              <Link className="link" to="/logout">Logout</Link>
              <Link className="link" to="/contact">Contact Us</Link>
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
