const Player = require("../models/players.model")

const addTeam = async(req, res) => {
try {
      const {name} = req.body;
      if(!name)
         return res.status(400).json({message : "insufficient data"})
      
      const checkTeam = await Team.findOne({name})
      if(checkTeam)
        return res.status(400).json({message : "Team is already exist"})
      const newTeam = await Team.ccreate({name})
      return res.status(200).json({newTeam, message : "sucessfully team added"})
  } catch (error) {
      console.log("addTeam", error);
  }
}

const addPlayer = async(req, res) => {
  
}

const addPlayerNewStrick = async(req, res) => {

}

const changeIsActive = async(req, res) => {

}

const addAndChangePlayerData = async(req, res) => {

}

const addFollowers = async(req, res) => {

}

module.exports = {
    addTeam,
    addPlayer,
    addPlayerNewStrick,
    changeIsActive,
    addAndChangePlayerData,
    addFollowers
}