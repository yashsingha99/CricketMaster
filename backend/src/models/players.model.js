const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const playerSchema = mongoose.Schema(
  {
    generalInformation: {
      name:{
        type : String,
        require : true
      },
      role: {
        type : String,
        require : true
      },

      teamsPlayedFor: [
        {
          type : mongoose.Schema.Types.ObjectId,
          ref : "Teams"
        } 
      ],

      debutYear: {
        type : Number,
        require : true
      },

      nationality:{
        type : String,
        require : true
      },
    },
    
    careerStatistics: {
      upToYear: 2023,
      matchesPlayed: 237,
      runsScored: 7263,
      battingAverage: 37.54,
      strikeRate: 129.15,
      centuries: 7,
      halfCenturies: 50,
      highestScore: "122*",
      wicketsTaken: 4,
      bowlingAverage: 92.25,
      bestBowlingFigures: "2/25",
    },
    
    matches : [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref : Matches
      }
    ],

    
    best_Matches : [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref : Matches
      }
    ],

    age : {
        type : String,
        required : true
    },
    
  },
  { timestamps: true }
);


const Player = mongoose.model("Player", playerSchema);
module.exports = User;
