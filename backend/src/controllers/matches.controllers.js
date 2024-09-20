const Player = require("../models/players.model");
const Ground = require("../models/grounds.model");
const Match = require("../models/match.model");

const search = async (req, res) => {
  try {
    const { playerName, playerTeam, groundName, matchDate, matchTeam } =
      req.body;

    let playerQuery = {};
    let groundQuery = {};
    let matchQuery = {};

    if (playerName) {
      playerQuery.name = { $regex: playerName, $options: "i" };
    }
    if (playerTeam) {
      playerQuery.team = { $regex: playerTeam, $options: "i" };
    }
    if (playerRole) {
      playerQuery.role = { $regex: playerRole, $options: "i" };
    }

    if (groundName) {
      groundQuery.name = { $regex: groundName, $options: "i" };
    }
    if (groundLocation) {
      groundQuery.location = { $regex: groundLocation, $options: "i" };
    }

    if (matchDate) {
      matchQuery.date = new Date(matchDate);
    }
    if (matchTeam) {
      matchQuery.teams = { $regex: matchTeam, $options: "i" };
    }

    let results = {};

    if (Object.keys(playerQuery).length) {
      results.players = await Player.find(playerQuery);
    }

    if (Object.keys(groundQuery).length) {
      results.grounds = await Ground.find(groundQuery);
    }

    if (Object.keys(matchQuery).length) {
      results.matches = await Match.find(matchQuery);
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Server error occurred while searching" });
  }
};

const findMatch = async (req, res) => {
  const { date } = req.body;

  if (!date) {
    return res
      .status(400)
      .json({ message: "Date query parameter is required" });
  }

  try {
    const dateString = date.toString();
    const regexPattern = new RegExp(`^${dateString}`);
    const documents = await Match.find({
      date: { $regex: regexPattern },
    });
    res.status(200).json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const searchMatch = async (req, res) => {
  try {
    const { mid, venue, bat_team, bowl_team } = req.body;

    const query = {};
    if (mid) {
      query["match.mid"] = mid;
    }
    if (venue) {
      query["venue"] = { $regex: venue, $options: "i" }; 
    }
    if (bat_team) {
      query["bat_team"] = { $regex: bat_team, $options: "i" };
    }  
    if (bowl_team) {
      query["bowl_team"] = { $regex: bowl_team, $options: "i" }; 
    }
    const matches = await Match.find(query);
    if (!matches.length) {
      return res.status(404).json({ message: "No matches found" });
    }
    res.status(200).json(matches);
  } catch (error) {
    console.error("Error searching matches:", error);
    res.status(500).send({ error: "Failed to search matches" });
  }
};

const matchesData = require("../sample_data/matchesData.json");

const addMatchData = async (req, res) => {
  try {
    await Match.deleteMany({});

    const bulkOperations = [];
    let matchId = matchesData[0].mid;
    let matchData = [];
    let currentDate = matchesData[0].date;
    let currentvenue = matchesData[0].venue;
    let currentbat_team = matchesData[0].bat_team;
    let currentbowl_team = matchesData[0].bowl_team;

    for (const bowl of matchesData) {
      if (matchId !== bowl.mid) {
        const match = {
          matchData,
          date: currentDate,
          venue: currentvenue,
          bat_team: currentbat_team,
          bowl_team: currentbowl_team,
        };

        bulkOperations.push({
          insertOne: {
            document: match,
          },
        });

        matchData = [];
        matchId = bowl.mid;
        currentDate = bowl.date;
        currentvenue = bowl.venue;
        currentbat_team = bowl.bat_team;
        currentbowl_team = bowl.bowl_team;
      }

      matchData.push(bowl);
    }

    if (matchData.length > 0) {
      const match = {
        matchData,
        date: currentDate,
        vanue: currentvenue,
        bat_team: currentbat_team,
        bowl_team: currentbowl_team,
      };

      bulkOperations.push({
        insertOne: {
          document: match,
        },
      });
    }

    if (bulkOperations.length > 0) {
      await Match.bulkWrite(bulkOperations);
    }

    res.status(200).send({ message: "Match data added successfully!" });
  } catch (error) {
    console.error("Error adding match data:", error);
    res.status(500).send({ error: "Failed to add match data" });
  }
};

module.exports = {
  search,
  addMatchData,
  findMatch,
  searchMatch,
};
