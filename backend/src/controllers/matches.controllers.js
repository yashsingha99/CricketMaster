// controllers/searchController.js
const Player = require("../models/players.model");
const Ground = require("../models/grounds.model");
const Matches = require("../models/matches.model");

exports.search = async (req, res) => {
  try {
    const {
      playerName,
      playerTeam,
      playerRole,
      groundName,
      groundLocation,
      matchDate,
      matchTeam,
    } = req.query;

    let playerQuery = {};
    let groundQuery = {};
    let matchQuery = {};

    // Build the player query only if relevant fields are provided
    if (playerName) {
      playerQuery.name = { $regex: playerName, $options: "i" };
    }
    if (playerTeam) {
      playerQuery.team = { $regex: playerTeam, $options: "i" };
    }
    if (playerRole) {
      playerQuery.role = { $regex: playerRole, $options: "i" };
    }

    // Build the ground query only if relevant fields are provided
    if (groundName) {
      groundQuery.name = { $regex: groundName, $options: "i" };
    }
    if (groundLocation) {
      groundQuery.location = { $regex: groundLocation, $options: "i" };
    }

    // Build the match query only if relevant fields are provided
    if (matchDate) {
      matchQuery.date = new Date(matchDate);
    }
    if (matchTeam) {
      matchQuery.teams = { $regex: matchTeam, $options: "i" };
    }

    let results = {};

    // Execute player query if any player-related field was provided
    if (Object.keys(playerQuery).length) {
      results.players = await Player.find(playerQuery);
    }

    // Execute ground query if any ground-related field was provided
    if (Object.keys(groundQuery).length) {
      results.grounds = await Ground.find(groundQuery);
    }

    // Execute match query if any match-related field was provided
    if (Object.keys(matchQuery).length) {
      results.matches = await Match.find(matchQuery);
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Server error occurred while searching" });
  }
};

const matchesData = require("../sample_data/matchesData.json");
const addMatchData = async (req, res) => {
  await Matches.deleteMany({})
  const groupedMatches = {};
  matchesData.forEach((delivery) => {
        const matchId = delivery.mid;
        if (!groupedMatches[matchId]) {
            groupedMatches[matchId] = [];
        }
        groupedMatches[matchId].push(delivery);
    });
    console.log(matchesData);
    
    // for (let matchId in groupedMatches) {
    //     const matchDeliveries = groupedMatches[matchId];

    //     const filteredDeliveries = matchDeliveries.filter(d => d.overs <= 20);
    //     try {
    //         await Matches.insertMany(filteredDeliveries);
    //         console.log(`Data for match ${matchId} saved successfully.`);
    //     } catch (error) {
    //         console.error(`Error saving match ${matchId}:`, error);
    //     }
    // }
};

module.exports = {
  addMatchData,
};
