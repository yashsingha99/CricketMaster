const mongoose = require("mongoose");

const matchSchema = mongoose.Schema(
  { 
    matchName: {
      type: String,
      require: true,
    },
    
    teams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Team,
      },
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Team,
      },
    ],
    
    Matchdate: {
      typr: Date,
      require: true,
    },
    
    // abounded, T1 win, T2 win, match cancelled
    matchStatus: {
      Type: String,
      require: true,
    },
    
    match: {
      Team1: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Over",
        },
      ],
      Team2: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Over",
        },
      ],
    },

    ground : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Over",
    }
  },
  {
    timestamps: true,
  }
);

const Matches = mongoose.model("Matches", matchSchema);
module.exports = Matches;