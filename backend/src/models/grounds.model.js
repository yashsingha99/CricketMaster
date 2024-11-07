const mongoose = require('mongoose');

const groundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  capacity: {
    type: Number,
    required: true,
  },
  dimensions: {
    length: {
      type: Number, // in meters
      required: true,
    },
    width: {
      type: Number, // in meters
      required: true,
    },
  },
  images: [
    {
      url: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
    },
  ],
  
  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
    },
  ],
  established: {
    type: Date,
  },
  homeTeams: [
    {
      type: String,
    },
  ],
  pitchType: {
    type: String,
    enum: ['Grass', 'Artificial', 'Hybrid'],
  },
  lastRenovated: {
    type: Date,
  },
});

const Ground = mongoose.model('Ground', groundSchema);

module.exports = Ground;



