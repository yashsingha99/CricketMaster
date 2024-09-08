const mongoose = require("mongoose");
const Ground = require("../models/grounds.model");
const sample = require("../sample_data/sample");

const groundQuery = async (req, res) => {
  try {
    const { name, _id } = req.body;
    const matchStage = [];
    if (name) {
      matchStage.push({ name: { $regex: name, $options: "i" } });
    }

    if (_id) {
      if (mongoose.Types.ObjectId.isValid(_id)) {
        matchStage.push({ _id: new mongoose.Types.ObjectId(_id) });
      } else {
        return res.status(400).json({ message: "Ground ID isn't valid" });
      }
    }

    const pipeline = [
      {
        $match: {
          $and: matchStage,
        },
      },
    ];

    const results = await Ground.aggregate(pipeline).exec();

    if (!results.length) {
      return res.status(404).json({ message: "Ground not found" });
    }

    return res.status(200).json({ results, message: "Query successful" });
  } catch (error) {
    console.error("groundQuery error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllGrounds = async (req, res) => {
  try {
    const grounds = await Ground.find({});

    return res.status(200).json({
      success: true,
      data: grounds,
    });
  } catch (error) {
    console.error("getAllGrounds error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch grounds",
      error: error.message,
    });
  }
};

const addData = async () => {
  try {
    const del = await Ground.deleteMany({});
    console.log(del);
    const res = await Ground.insertMany(sample);
    console.log("Sample data inserted successfully!");
    return res;
  } catch (error) {
    console.error("Error inserting sample data:", error.message);
    throw error; // Use throw to propagate the error
  }
};

module.exports = { groundQuery, getAllGrounds, addData };
