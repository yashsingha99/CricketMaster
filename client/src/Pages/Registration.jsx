import React from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import { Register as RegisterUser } from "../api/user.api";

const Registration = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const handleRegister = async (data) => {
    try {
      const res = await RegisterUser(data);

      if (res?.status == 200) {
        alert("successfully register");
        navigate("/dashboard");
      } else alert("something went wrong");
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  return (
    <form action="" onSubmit={handleSubmit(handleRegister)}>
      <h1 className="black">SignUp</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Username"
          required
          {...register("name", {
            required: true,
          })}
        />
        <FaUser className="icon" />
      </div>
      <div className="input-box">
        <input
          type="email"
          placeholder="Email"
          required
          {...register("email", {
            required: true,
          })}
        />
        <FaEnvelope className="icon" />
      </div>
      <div className="input-box">
        <input
          type="password"
          placeholder="Password"
          required
          {...register("password", {
            required: true,
          })}
        />
        <FaLock className="icon" />
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Your Favourite Team"
          required
          {...register("name", {
            required: true,
          })}
        />
        <FaUser className="icon" />
      </div>

      <div className="main-btn">
        <button type="submit">Register</button>
      </div>
      <div className="register-link">
        <h4 className="black">
          Already have an account? <Link to="/Login">Login</Link>
        </h4>
      </div>
    </form>
  );
};
export default Registration;
