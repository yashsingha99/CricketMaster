const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yearStatSchema = new Schema({
  year: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const playerSchema = new Schema({
  name: {
    type: String,
  },
  country: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  role: {
    type: String,
    enum: ['bowler', 'batsman', 'all-rounder', 'wicketkeeper'],
  },
  battingAvg: {
    type: mongoose.Types.Decimal128, // Using Decimal128 for more precise averages
  },
  strikeRate: {
    type: mongoose.Types.Decimal128, // Using Decimal128 for more precise strike rates
  },
  matchesPlayed: {
    type: Number,
  },
  runsScored: {
    type: Number,
  },
  ballsFaced: {
    type: Number,
  },
  wicketsTaken: {
    type: Number,
  },
  yearlyStats: [yearStatSchema], // Dynamic array of year-value pairs for scalability
  Batting_Hand: {
    type: String,
    enum: ['Right_Hand', 'Left_Hand'],
  },
  Bowling_Skill: {
    type: String,
  },
}, {
  timestamps: true, // Adding timestamps for record keeping
});

// Adding compound index for better query performance in some scenarios
playerSchema.index({ name: 1, country: 1, role: 1 });

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
