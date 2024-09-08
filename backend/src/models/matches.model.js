const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  match: [
    {
      mid: Number,
      date: String,
      venue: String,
      bat_team: String,
      bowl_team: String,
      batsman: String,
      bowler: String,
      runs: Number,
      wickets: Number,
      overs: Number,
      runs_last_5: Number,
      wickets_last_5: Number,
      striker: Number,
      non_striker: Number,
      total: Number,
    },
  ],
});

const Matches = mongoose.model("Matches", matchSchema);
module.exports = Matches;
