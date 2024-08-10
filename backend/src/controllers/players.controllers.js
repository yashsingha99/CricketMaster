const Player = require("../models/players.model");
const Team = require("../models/teams.model")
const addPlayerGeneralInfo = async (req, res) => {
  try {
    console.log(req.body);
    
    const { name, role, teamsPlayedFor, age, nationality, avatar } = req.body;
    if ( !name || !role || !teamsPlayedFor || !age || !nationality ) {
      return res.send(400).json({ mesage: "All credentials are required!!" });
    } 

    const findTeam = await Team.findOne({name})
    const generalInfo = {
      name,
      role,
      age,
      teamsPlayedFor: [findTeam],
      nationality,
      avatar : req.body?.avatar
    };
    const newPlayer = await Player.create({generalInfo});
    if (!newPlayer) return res.status(500).json({ mesage: "Internel issue" });
    return res
      .status(200)
      .json({ player: newPlayer, message: "Player succesfully added" });
  } catch (error) {
    console.log("addPlayerGeneralInfo", error);
  }
};
  

const updateCrearePlayer = async (req, res) => {
  try {
    const { upToYear, matchesPlayed, runsScored, battingAverage, strikeRate, centuries, halfCenturies, highestScore, wicketsTaken, bowlingAverage, bestBowlingFigures, playerOfTheMatch } = req.body;
     
    // const findTeam = await Team.findOne({name})
    const generalInfo = { };
    
    const newPlayer = await Player.create({generalInfo});
    if (!newPlayer) return res.status(500).json({ mesage: "Internel issue" });
    return res
      .status(200)
      .json({ player: newPlayer, message: "Player succesfully update" });
  } catch (error) {
    console.log("addPlayer", error);
  }
};

module.exports = {
  addPlayerGeneralInfo,
  updateCrearePlayer,
};
