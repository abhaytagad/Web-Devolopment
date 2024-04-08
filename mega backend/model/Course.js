

const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({

   courseName:{
        type:String,
       
   },
   courseDescription:
    {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"SubSection"
    },
    whatYouWilllearn:{
        type:String,
       
   },
   courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section"
   
        },
    ],
    ratinAndReview:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview"
   
        },
    ],
    price:{
        type:String,
       
   },
   thumbnail:{
        type:String,
   
    },
    tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag"
       
   },
   instructor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
   
},
   studentEnrolled:[
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
],            
}
)
module.exports = mongoose.model("Course",courseSchema)