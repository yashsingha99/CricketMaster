const express = require("express");
const Router = express.Router();

const {
  register,
  login,
  getCurrentUser,
  changePassWord,
  fetchAllUsersController,
} = require("../controllers/user.controllers");

Router.post('/', login);
Router.post('/register', register);
Router.post('/getCurrentUser', getCurrentUser);
Router.post('/changePassWord', changePassWord);
Router.post('/fetchAllUsersController', fetchAllUsersController);

module.exports = {Router}
