import React from "react";
import "../styles/Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Login as LoginUser } from "../api/user.api";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Context"
const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (data) => {
    try {
      const res = await LoginUser(data);
      console.log(res);
      login();
      if (res.status == 200) {
        alert("successfully logged in");
        navigate("/");
      } else alert(`${res.response.data.message}`);
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <form action="" onSubmit={handleSubmit(handleLogin)}>
      <h1 className="black">Login</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: true,
          })}
        />
        <FaUser className="icon" />
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Password"
          {...register("password", {
            required: true,
          })}
        />
        <FaLock className="icon" />
      </div>

      <div className="remember-forgot">
        <label className="black">
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#">Forgot password?</a>
      </div>

      <div className="main-btn">
        <button type="submit">Login</button>
      </div>

      <div className="register-link">
        <h4 className="black">
          Don't have an account? <Link to="/registration">Register</Link>
        </h4>
      </div>
    </form>
  );
};

export default Login;
