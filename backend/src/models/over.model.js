const mongoose = require("mongoose");

var overSchema = new mongoose.Schema({
  noOfOver: {
    type: String,
    required: true,
  },

  runs: [
    {
      type: String,
      required: true,
    },
  ],
  batter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
  },

  bowler: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
  },

  totlaNoBWLs: {
    type: String,
    required: true,
  },

  totlaWides: {
    type: String,
    required: true,
  },
});

const Over = mongoose.model("Over", overSchema);
module.exports = Over;
