const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const playerSchema = mongoose.Schema(
  {
    generalInfo: {
      name: {
        type: String,
        require: true,
      },

      avatar: {
        type: String,
        default: "https://thumbs.dreamstime.com/b/user-profile-icon-vector-avatar-person-picture-portrait-symbol-neutral-gender-silhouette-circle-button-photo-blank-272664038.jpg"
      },

      role: {
        type: String,
        require: true,
      },

      teamsPlayedFor: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Teams",
        },
      ],
          
      highPeformanceYears: [
        {
          type: Number,
          require: true,
        },
      ],

      age: {
        type: String,
        required: true,
      },

      nationality: {
        type: String,
        require: true,
      },
    },

    careerStatistics: {
      upToYear: {
        type: String,
        require: true,
      },
      matchesPlayed: {
        type: String,
        require: true,
      },
      runsScored: {
        type: String,
        require: true,
      },
      battingAverage: {
        type: String,
        require: true,
      },
      strikeRate: {
        type: String,
        require: true,
      },
      centuries: {
        type: String,
        require: true,
      },
      halfCenturies: {
        type: String,
        require: true,
      },
      highestScore: {
        type: String,
        require: true,
      },
      wicketsTaken: {
        type: String,
        require: true,
      },
      bowlingAverage: {
        type: String,
        require: true,
      },
      bestBowlingFigures: {
        type: String,
        require: true,
      }, //"2/25",
      playerOfTheMatch: {
        type: String,
        require: true,
      },
    },

    matches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Matches",
      },
    ],

    best_Matches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Matches",
      },
    ],

    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;