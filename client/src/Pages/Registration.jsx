import React from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Registration = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-box">
          <form action="">
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input type="Password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />I agree to the terms & conditions
              </label>
            </div>
            <div className="main-btn">
              <button type="submit">Register</button>
            </div>
            <div className="register-link">
              <h4>
                Already have an account? <Link to="/Login">Login</Link>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Registration;
