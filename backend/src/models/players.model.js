const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const playerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    strike_rate : {
      type : String,
      required : true
    },
    matches : [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref : Matches
      }
    ],

    teams : [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref : Teams
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
