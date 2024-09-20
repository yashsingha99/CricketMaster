const mongoose = require("mongoose");
const Player = require("../models/players.model");
const playerData = require("../sample_data/player.data");

const playerQuery = async (req, res) => {
  try {
    const { name, _id, role, country, allPlayer} = req.body;
   console.log(req.body);
   
    if (!name && !_id && !role && !country && !allPlayer) {
      return res.status(400).json({ message: "request data not found" });
    }

    
    if(allPlayer){
      const players = await Player.find({})
      if(!players)
         return res.status(400).json({message: "Players Not found"})
      return res.status(200).json({players, message: "successfully"})
    }
    
    const matchStage = [];
    if (name) {
      matchStage.push({ name: { $regex: name, $options: "i" } });
    }
    
    if (_id) {
      if (mongoose.Types.ObjectId.isValid(_id)) {
        matchStage.push({ _id: new mongoose.Types.ObjectId(_id) });
      } else {
        return res.status(400).json({ message: "Invalid ID format" });
      }
    }

    if (role) {
      matchStage.push({ role: { $regex: role, $options: "i" } });
    }

    if (country) {
      matchStage.push({ country: { $regex: country, $options: "i" } });
    }

    const pipeline = [
      { $match: { $and: matchStage } }
    ];

    const result = await Player.aggregate(pipeline);

    if (!result.length) {
      return res.status(404).json({ message: "Player not found" });
    }

    return res.status(200).json({ result, message: "Query successful" });
  } catch (error) {
    console.error("playerQuery", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const addData = async () => {
  try {
    await Player.deleteMany({});
    // const iplPlayer = playerData.filter((data) => (data.country === "India" || data === "india"))
    const res = await Player.insertMany(playerData);
    console.log("Sample data inserted successfully!");
    return res;
  } catch (error) {
    console.error("Error inserting sample data:", error.message);
    throw error;
  }
};

module.exports = { addData, playerQuery };