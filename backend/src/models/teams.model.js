const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
 
  overAllplayers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],

  matches: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
    },
  ],
  
  avatar: {
    type: String,
    default:
      "https://thumbs.dreamstime.com/b/user-profile-icon-vector-avatar-person-picture-portrait-symbol-neutral-gender-silhouette-circle-button-photo-blank-272664038.jpg",
  },
  
  owner: {
    type: String,
    required: true,
  },
  
  ownerAvatar: {
    type: String,
    default:
      "https://thumbs.dreamstime.com/b/user-profile-icon-vector-avatar-person-picture-portrait-symbol-neutral-gender-silhouette-circle-button-photo-blank-272664038.jpg",
  },

  isActive: {
    type: Boolean,
    default: false,
  },

  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ]
});

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
