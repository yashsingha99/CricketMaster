const Matches = require("../models/matches.mode");

const addMatch = async (req, res) => {
  try {
    const { matchName, team1, team2, matchStatus, ground } = req.body;
    if (!matchName || !team1 || !team2 || !matchStatus || !ground)
      return res.status(400).json({ message: "Insufficient data" });
    const data = {
      matchName,
      teams: [team1, team2],
      Matchdate: Date.now(),
      matchStatus,
      ground
    }
    const createMatch = await Matches.create(data);
    if(!createMatch)
        return res.status(500).json({message:"Internal Issue"})
    res.status(200).json({createMatch, message: "successfully match created"})
  } catch (error) {
    console.log("addMatch", error);
  }
};

const updateMatch = async (req, res) => {
  const {match, query} = req.body;
  if(!match || !query)
     return res.status(400).json({message: "Insufficient data"})
  

};

const deleteMatch = async (req, res) => {};

module.exports = {
  addMatch,
  updateMatch,
  deleteMatch,
};
