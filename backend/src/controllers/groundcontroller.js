const mongoose = require("mongoose");
const Ground = require("../models/grounds.model");
const groundQuery = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "data not found" });
  const matchStage = {
    $match: {
      $or: [{ name: { $regex: new RegExp(name, "i") } }],
    },
  };
  if (!groundStage) res.status(404).json({ message: "ground no found" });
  res.status(200).json({matchStage, message: "succesfull"})
  // const res = mongoose.
};
