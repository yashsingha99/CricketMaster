import React from "react";
import "../styles/Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Login as LoginUser } from "../api/user.api";
import { useForm } from "react-hook-form";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
    try {
      const res = LoginUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-box">
          <form action="" onSubmit={handleSubmit(handleLogin)}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                {...register("username", {
                  required: true,
                })}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="Password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />
              <FaLock className="icon" />
            </div>

            <div className="remember-forgot">
              <label>
                {/*add cookies for remember me */}
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
