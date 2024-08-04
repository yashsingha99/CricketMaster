const mongoose = require("mongoose");

var overSchema = new mongoose.Schema(
  {
  noOfOver: {
    type: String,
    required: true,
  },
  
  runs: [
    [
      {
        type: String,
        required: true,
      },
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
      }
    ]
  ],

  bowler: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
  },

  totalNoBWLs: {
    type: String,
    required: true,
  },

  totalWides: {
    type: String,
    required: true,
  },

  totalWickets: {
    type: String,
    required: true,
  }
});

const Over = mongoose.model("Over", overSchema);
module.exports = Over;
