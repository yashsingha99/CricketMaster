import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpeg";

const Header = () => {
  function toggleDarkMode() {
    const root = document.documentElement;
    root.classList.toggle("dark");
  }

  return (
    <header className="header">
      <div className="header-top">
        <Link className="link1" to="/">
          <img className="logo" src={logo} alt="img" />
          <h2>CricketMaster</h2>
        </Link>

        <nav className="nav">
          <Link className="link" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="link" to="/matches">
            <h3>Matches</h3>
          </Link>
          <Link className="link" to="/videos">
            <h3>Videos</h3>
          </Link>
          <Link className="link" to="/venues">
            <h3>Venues</h3>
          </Link>
          <Link className="link" to="/Teams">
            <h3>Teams</h3>
          </Link>

          <div className="dropdown">
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
        </nav>
        
        <div className="themeBtn">
          <button className="ThemeButton" onClick={toggleDarkMode}></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
