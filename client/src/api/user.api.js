import axios from "axios";

const URI = "http://localhost:5000";

export const Login = async (user) => {
  try {
    const res = await axios.post(`${URI}/api/user/`, user);
    return res;
  } catch (error) {
    console.log("login", error);
    error = {error , status : 400}
    return error
  }
};

export const Register = async (user) => {
  try {
    const res = await axios.post(`${URI}/api/user/register`, user);
    return res;
  } catch (error) {
    error = {error , status : 400}
    return error
  }
};

export const GetCurrentUser = async (data) => {
  try {
    const res = await axios.post(`${URI}/app/user/getCurrentUser`, data);
    return res;
  } catch (error) {
    console.log("getCurrentUser", error);
  }
};

export const ChangePassWord = async (data) => {
  try {
    const res = await axios.post(`${URI}/app/user/changePassWord`, data);
    return res;
  } catch (error) {
    console.log("changePassWord", error);
  }
};

export const FetchAllUsers = async (data) => {
  try {
    const res = await axios.post(
      `${URI}/app/user/fetchAllUsers`,
      data
    );
    return res;
  } catch (error) {
    console.log("fetchAllUsers", error);
  }
};
