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
    mobile:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team