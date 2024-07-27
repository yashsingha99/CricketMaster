const {Router} = require('express')
const router = Router();
const {
  register,
  login,
  getCurrentUser,
  changePassWord,
} = require("../controllers/user.controllers");

router.post('/', login);
router.post('/register', register);
router.post('/getCurrentUser', getCurrentUser);
router.post('/changePassWord', changePassWord);
//  Router.post('/fetchAllUsersController', fetchAllUsersController);
module.exports = router
