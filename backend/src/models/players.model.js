const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    country: {
        type: String,
    },
    dob: {
        type: Date,
    },
    role: {
        type: String,
        enum: ['batsman', 'bowler'],
    },
    // Batting statistics
    battingAvg: {
        type: Number,
        default: null,
    },
    strikeRate: {
        type: Number,
        default: null,
    },
    runsScored: {
        type: Number,
        default: null,
    },
    ballsFaced: {
        type: Number,
        default: null,
    },
    highScore: {
        type: Number,
        default: null,
    },
    hundreds: {
        type: Number,
        default: null,
    },
    fifties: {
        type: Number,
        default: null,
    },
    sixes: {
        type: Number,
        default: null,
    },
    fours: {
        type: Number,
        default: null,
    },
    runsPerMatch: {
        type: Number,
        default: null,
    },
    // Bowling statistics
    wicketsTaken: {
        type: Number,
        default: null,
    },
    economy: {
        type: Number,
        default: null,
    },
    bestBowling: {
        type: Number,
        default: null,
    },
    fiveWickets: {
        type: Number,
        default: null,
    },
    tenWickets: {
        type: Number,
        default: null,
    },
    maidens: {
        type: Number,
        default: null,
    },
    bowlingAverage: {
        type: Number,
        default: null,
    },
    bowlingStrikeRate: {
        type: Number,
        default: null,
    },
    bestBowlingInInnings: {
        type: Number,
        default: null,
    },
    bestBowlingInMatch: {
        type: Number,
        default: null,
    },
    // Additional stats
    runsInLastInnings: {
        type: Number,
        default: null,
    },
    wicketsInLastInnings: {
        type: Number,
        default: null,
    },
    bestBowlingInLastInnings: {
        type: Number,
        default: null,
    },
    yearlyStats: {
        type: Map,
        of: Number,
        default: {},
    },

    hand: {
        type: String,
        enum: ['Right_Hand', 'Left_Hand'],
        default: null,
    },
    bowlingStyle: {
        type: String,
        default: null,
    },
    additionalStat1: {
        type: Number,
        default: null,
    },
    additionalStat2: {
        type: Number,
        default: null,
    },
}, { timestamps: true });

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
