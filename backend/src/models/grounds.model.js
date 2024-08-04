const mongoose = require("mongoose");

const groundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  place: {
    type: String,
    require: true
  },

  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
    },
  ],

  isActive: {
    type: Boolean,
    default: false 
  }
});

const Ground = mongoose.model("Ground", groundSchema);
module.exports = Ground;
