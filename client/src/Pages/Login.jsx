import React from "react";
import "../styles/Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Login as LoginUser } from "../api/user.api";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate()
  const handleLogin = async(data) => {
    try {
      const res = await LoginUser(data);
      
      if(res.status == 200){
        alert("successfully logged in")
        navigate('/dashboard')
      }
       else 
         alert("something went wrong")
    } catch (error) {
      console.log(error);
    }
    reset()
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-box">
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
                type="Password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />
              <FaLock className="icon" />
            </div>

            <div className="remember-forgot">
              <label className="black">
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
              <h4 className="black">
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
