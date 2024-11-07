const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name?.trim() || !email?.trim() || !password?.trim()) {
      return res.status(400).json({ message: "Insufficient data" });
    }

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({ message: "User with email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword });

    const user = await User.findById(newUser._id).select("-password");

    return res.status(200).json({ user, message: "User successfully created" });
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All credentials are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const userData = await User.findById(user._id).select("-password");

    return res.status(200).json({ user: userData, message: "Successfully logged in" });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const userId = req.body._id;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user, message: "Successfully retrieved current user" });
  } catch (error) {
    console.error("GetCurrentUser Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const changePassword = async (req, res) => {
  try {
    const { newPassword, oldPassword, userId } = req.body;

    if (!newPassword || !oldPassword || !userId) {
      return res.status(400).json({ message: "Insufficient data" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValidPassword = await user.isPasswordCorrect(oldPassword);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Old password is incorrect" });
    }

    user.password = newPassword;
    await user.save({ validateBeforeSave: false });

    return res.status(200).json({ message: "Password successfully changed" });
  } catch (error) {
    console.error("ChangePassword Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const fetchAllUsers = async (req, res) => {
  try {
    const search = req.body.search || "";
    const keyword = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const users = await User.find(keyword).find({
      _id: { $ne: req.body._id },
    });

    if (!users.length) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error("FetchAllUsers Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// UpdateProfile function can be implemented similarly based on your needs.

module.exports = {
  register,
  login,
  getCurrentUser,
  changePassword,
  fetchAllUsers,
};
