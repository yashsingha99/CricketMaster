import React from "react";
import "../styles/header.css"
import { Link } from 'react-router-dom'
// import icons from 'react-fontawesome'

const Header = () => {
  return (
    <header>
      <div className="head">
        <Link className="link" to='/'>
        {/* <i class="fa-solid fa-infinity"></i> */}
        <h2>CricketMaster</h2>
        </Link>
        
        <nav class="right">
          <Link className="link" to='/login'><h3>Login</h3></Link>
          <Link className="link" to='/registration'><h3>Register</h3></Link>
          <Link className="link" to='/'><h3>Home</h3></Link>
          <Link className="link" to='/profile'><h3>Profile</h3></Link>
          <Link className="link" to='/dashboard'><h3>Dashboard</h3></Link>
          <Link className="link" to='/contact'><h3>Contact Us</h3></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
