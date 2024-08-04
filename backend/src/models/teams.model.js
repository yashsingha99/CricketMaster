const mongoose = require('mongoose'); 

const teamSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    players: [
       {
        type:mongoose.Schema.Types.ObjectId,
        ref : "Player"
       }
    ],

    overAllplayers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref : "Player"
        }
    ],

    matches : [
        {
           type:mongoose.Schema.Types.ObjectId,
           ref : "Match"
        }
    ],

    isActive: {
        type: Boolean,
        default: false 
    } 
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team