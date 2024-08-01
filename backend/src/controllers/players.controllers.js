const Player = require("../models/players.model");

const addPlayer = async (req, res) => {
  try {
    const { name, role, teamsPlayedFor, avatar, age, nationality } = req.body;
    if (
      [name, role, teamsPlayedFor, age, avatar, nationality].some(
        (field) => field?.trim() === ""
      )
    ) {
      return res.send(400).json({ mesage: "All credentials are required!!" });
    }
    const findTeam = await Team.findOne({name})
    const generalInfo = {
      name,
      role,
      age,
      teamsPlayedFor: {findTeam},
      nationality,
      avatar
    };
    const newPlayer = await Player.create({generalInfo});
    if (!newPlayer) return res.status(500).json({ mesage: "Internel issue" });
    return res
      .status(200)
      .json({ player: newPlayer, message: "Player succesfully added" });
  } catch (error) {
    console.log("addPlayer", error);
  }
};

const updatePlayer = async (req, res) => {};

module.exports = {
  addPlayer,
  updatePlayer,
};
