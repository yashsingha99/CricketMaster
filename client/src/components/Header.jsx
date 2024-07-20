import React from "react";
import "../styles/header.css"
import { Link } from 'react-router-dom'
import logo from "../images/infinity.png"

const Header = () => {
  return (
    <header>
      <div className="head">
        <Link className="link" to='/'>
        <img  className='logo' src={logo} alt="img" />
        <h2>CricketMaster</h2>
        </Link>
        
        <nav className="right">
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
