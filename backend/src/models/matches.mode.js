const mongoose = require("mongoose");

const matchSchema = mongoose.Schema(
   { 
      matchName : {
         type : String,
         require : true 
      },
      
      teams : [
         {
           type : mongoose.Schema.Types.ObjectId,
           ref  : Team
         },
         {
             type : mongoose.Schema.Types.ObjectId,
             ref  : Team
         }
      ],
      
      // abounded, T1 win, T2 win, match cancelled
      matchStatus : {
         Type : String,
         require : true
      },
       
      
   },
   {
       timestamps:true 
   }
)