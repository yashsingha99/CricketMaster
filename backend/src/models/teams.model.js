const mongoose = require('mongoose'); 

var teamSchema = new mongoose.Schema({
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
    matches : [
        {
           type:mongoose.Schema.Types.ObjectId,
           ref : "Match"
        }
    ]
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team