const Player = require("../models/players.model");
const Team = require("../models/teams.model");

const addTeam = async (req, res) => {
  try {
    const { name, avatar, owner, ownerAvatar } = req.body;
    if (
      [name || avatar || owner || ownerAvatar].some(
        (field) => field?.trim() === ""
      )
    )
      return res.status(400).json({ message: "insufficient data" });

    const checkTeam = await Team.findOne({ name });
    if (checkTeam)
      return res.status(400).json({ message: "Team is already exist" });
    const newTeam = await Team.create({ name, avatar, owner, ownerAvatar });
    return res.status(200).json({ newTeam, message: "sucessfully team added" });
  } catch (error) {
    console.log("addTeam", error);
  }
};

const addPlayer = async (req, res) => {
  try {
    const { Player, team } = req.body;
    if (!Player || !team)
      return res.status(400).json({ message: "Insufficient data" });

    const findPlayer = await Player.findById(Player._id);
    if (!findPlayer)
      return res.status(400).json({ message: "player not found" });

    const findTeam = await Player.findById(team._id);
    if (!findTeam) return res.status(400).json({ message: "team not found" });
    
    const addPlayer = await Team.findByIdAndUpdate(
      findTeam._id,
      {
        $addToSet: { players: Player },
        $addToSet: { overAllplayers: Player },
      },
      {
        new: true,
      }
    );

    if (!addPlayer) {
      return res.status(500).json({ message: "Internal issue" });
    }

    return res
      .status(500)
      .json({ addPlayer, message: "succesfully players added in team" });
  } catch (error) {
    console.log("addPlayer", error);
  }
};

const addPlayerNewStrick = async (req, res) => {};

const changeIsActive = async (req, res) => {};

const addAndChangePlayerData = async (req, res) => {};

const addFollowers = async (req, res) => {
  const { team } = req.body;

};

module.exports = {
  addTeam,
  addPlayer,
  addPlayerNewStrick,
  changeIsActive,
  addAndChangePlayerData,
  addFollowers,
};
