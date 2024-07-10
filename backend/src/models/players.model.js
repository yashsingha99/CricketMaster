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
        type : mongoose
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
