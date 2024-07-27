const mongoose = require("mongoose");

var groundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
    },
  ],
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Ground = mongoose.model("Ground", groundSchema);
module.exports = Ground;
