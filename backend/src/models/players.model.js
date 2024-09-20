const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  img: {
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
  },
  battingAvg: {
    type: Number,
  },
  strikeRate: {
    type: Number,
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
    default: 0
  },
  performanceByYear: {
    type: Map,
    of: Number, 
    default: {}
  },
  battingHand: {
    type: String,
    enum: ['Right_Hand', 'Left_Hand']
  },
  bowlingSkill: {
    type: String,
    default: ""
  }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
