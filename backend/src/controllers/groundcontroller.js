const mongoose = require("mongoose");
const Ground = require("../models/grounds.model");

const groundQuery = async (req, res) => {
  try {
    const { name, _id } = req.body;
    const matchStage = [];
    if (req.body?.name)
      matchStage.push({ name: { $regex: new RegExp(name, "i") } });
    if (req.body?._id) {
      if (mongoose.Types.ObjectId.isValid(_id))
        matchStage.push({ _id: new mongoose.Types.ObjectId(_id) });
      else res.status(400).json({ message: "groung id isn't valid" });
    }
    const groundStage = {
      $match: {
        $or: matchStage,
      },
    };

    const pipeline = [groundStage];

    const results = await Ground.aggregate(pipeline).exec();

    if (results.length === 0) {
      return res.status(404).json({ message: "Ground not found" });
    }

    res.status(200).json({ results, message: "Successful" });
  } catch (error) {
    console.error("groundQuery error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getAllGrounds = async (req, res) => {
  try {
    const grounds = await Ground.find({}); // Fetch all grounds from the database
    console.log("grounds", grounds);

    res.status(200).json({
      success: true,
      data: grounds,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch grounds",
      error: error.message,
    });
  }
};
const { sample } = require("../sample");
const addData = async () => {
  try {
    const del = await Ground.deleteMany(sample);
    console.log(del)
    const res = await Ground.insertMany(sample);
    console.log("Sample data inserted successfully!");
    return res;
  } catch (error) {
    console.error("Error inserting sample data:", error.message);
    return error;
  }
};
module.exports = { groundQuery, getAllGrounds, addData };
