const Player = require("../models/players.model");
const Team = require("../models/teams.model");
const User = require("../models/user.model");
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

const addPlayerIntoTeam = async (req, res) => {
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
      .status(200)
      .json({ addPlayer, message: "succesfully players added in team" });
  } catch (error) {
    console.log("addPlayer", error);
  }
};

const addPlayerNewStrick = async (req, res) => {};

const changeIsActive = async (req, res) => {
  try {
    const { team } = req.body;
    if (!team )
      return res.status(400).json({ message: "Insufficient data" });

    const checkTeam = await Player.findById(team._id);
    if (!checkTeam) return res.status(400).json({ message: "team not found" });
     
    const changeIsActive = await Team.findByIdAndUpdate(
      checkTeam._id,
      {
        isActive: !checkTeam.isActive
      },
      {
        new: true,
      }
    );

    if (!changeIsActive) {
      return res.status(500).json({ message: "Internal issue" });
    }

    return res
      .status(200)
      .json({ changeIsActive, message: "succesfully change isActive" });
  } catch (error) {
    console.log("changeIsActive", error);
  }
};


const addFollowers = async (req, res) => {
  try {
    const { team, user } = req.body;
    if (!team || !user)
      return res.status(400).json({ message: "Insufficient data" });

    const checkTeam = await Player.findById(team._id);
    if (!checkTeam) return res.status(400).json({ message: "team not found" });

    const checkUser = await User.findById(team._id);
    if (!checkUser) return res.status(400).json({ message: "user not found" });

    const addFollowers = await Team.findByIdAndUpdate(
      checkTeam._id,
      {
        $addToSet: { followers: checkUser },
      },
      {
        new: true,
      }
    );

    if (!addFollowers) {
      return res.status(500).json({ message: "Internal issue" });
    }

    return res
      .status(200)
      .json({ addFollowers, message: "succesfully followers added" });
  } catch (error) {
    console.log("addFollowers", error);
  }
};

module.exports = {
  addTeam,
  addPlayerIntoTeam,
  addPlayerNewStrick,
  changeIsActive,
  addFollowers,
};
