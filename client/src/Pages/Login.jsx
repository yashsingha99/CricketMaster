import React from "react";
import "../styles/Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-box">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="Password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <div className="main-btn">
              <button type="submit">Login</button>
            </div>

            <div className="register-link">
              <h4>
                Don't have an account? <Link to="/registration">Register</Link>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
