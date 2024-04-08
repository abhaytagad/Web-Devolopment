
const mongoose = require('mongoose')

const CourseProgressSchema = new mongoose.Schema({

   CourseID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
   },
   completeVideos:{
            
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubSection"
            
    }
}
)

module.exports = mongoose.model("CourseProgress",CourseProgressSchema)