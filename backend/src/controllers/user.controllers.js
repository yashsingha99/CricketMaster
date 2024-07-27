const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if ([name, email, password].some((field) => field?.trim() === "")) {
      return res.status(400).json({ message: "Insufficient data" });
    }
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({ message: " User with email already exist " });
    }
    const newUser = await User.create({ name, email, password });

    const user = await User.findById(newUser?._id).select("-password");
    
    return res
      .status(200)
      .json({ user, message: "successfully user is created" });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All credentials are required" });
    }

    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.status(400).json({ message: "Email is wrong" });
    }

    const checkPassword = await checkUser.isPasswordCorrect(password);
    if (!checkPassword) {
      return res.status(401).json({ message: "Password must match with email" });
    }

    const userData = await User.findById(checkUser?._id).select(" -password ");

    if (!userData) {
      return res.status(500).json({ message: "Something went wrong while user is authorizing" });
    }

    return res.status(200).json({ message: "Successfully logged in" });
  } catch (error) {
    console.log("login", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const getCurrentUser = async (req, res) => {
  try {
    const user = req.body;
    if (!user) {
      res.status(400).json({ message: "All credentials are required" });
    }
    const currentUser = User.findById(user?._id).select("-password");
    res.json({ currentUser, message: "successfully retrive current user" });
  } catch (error) {
    console.log(error);
  }
};

const changePassWord = async (req, res) => {
try {
      const { newPassword, oldPassword , user} = req.body;
      if (!newPassword || !oldPassword || !user) 
        res.status(401).json({ message: "Insuffficient data"});
      const userData = await User.findById(user?._id);
      const isValidPassword = await user.isPasswordCorrect(oldPassword);
      if (!isValidPassword) res.status(401).json({ message: "oldpassword mismatched"});
      user.password = newPassword;
      await user.save({ validateBeforeSave: false });
      return res.status(200).json({message : "password succesfully changed"});

      //TODO Send password to user via mail 
} catch (error) {
    console.log(error);
}
};

const fetchAllUsers = async (req, res) => {
try {
      const keyword = req.body.search
        ? {
            $or: [
              { name: { $regex: req.body.search, $options: "i" } },
              { email: { $regex: req.body.search, $options: "i" } },
            ],
          }
        : {};
        if(!keyword)
            res.status(400).json({message : "Insufficient data"})
      const users = await User.find(keyword).find({
        _id: { $ne: req.body._id },
      });
      res.json(users);
} catch (error) {
    console.log(error);
}
};

const updateProfile = async( req, res ) => {
    
}

module.exports = {
  register,
  login,
  getCurrentUser,
  changePassWord,
  fetchAllUsers,
};
