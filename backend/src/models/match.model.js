const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
  {
    matchData: [
      {
        mid: { type: Number },
        date: { type: String },
        venue: { type: String },
        bat_team: { type: String },
        bowl_team: { type: String },
        batsman: { type: String },
        bowler: { type: String },
        runs: { type: Number },
        wickets: { type: Number },
        overs: { type: Number },
        runs_last_5: { type: Number },
        wickets_last_5: { type: Number },
        striker: { type: Number },
        non_striker: { type: Number },
        total: { type: Number },
      },
    ],
    venue: {
      type: "String",
    },
    bowl_team: {
      type: "String",
    },
    bat_team: {
      type: "String",
    },
    date: {
      type: "String",
    },
  },
  { timestamps: true }
);

const Match = mongoose.model("Match", matchSchema);
module.exports = Match;
