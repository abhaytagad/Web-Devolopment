

const mongoose = require('mongoose')

const ratingandReviewShema = new mongoose.Schema({

   
   user:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    review:{
        type:String,
        required:true
   },
  
    rating:{
        type:Number,
       required:true
   },
        
}
)
module.exports = mongoose.model("RatinAndReview",ratingandReviewShema)