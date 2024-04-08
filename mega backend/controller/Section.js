const Section = require("../model/Section");
const Course = require('../model/Course')

exports.createSection = async (req,res)=>{

    try{

        const{sectionName,courseID} = req.body;

        if(!sectionName || !courseID){
            return  res.status(400).json(
                {
                    success:false,
                    message:"All fields are required"
                }
            )
        }

        const newSection = await Section.create({sectionName:sectionName});

        const updatedCourse = await Course.findByIdAndUpdate(courseID,{$push:{courseContent:newSection._id}},{new:true})
        
        res.status(400).json(
            {
                success:true,
                message:"Section created succesfully",
                updatedCourse
            }
        )
    }
    catch(e){
        res.status(400).json(
            {
                success:false,
                message:"something went wrong in Section"
            }
        )
    }

}


exports.updateSection = async (req,res)=>{

    try{

        const{sectionName,sectionID} = req.body;

        if(!sectionName || !sectionID){
            return  res.status(400).json(
                {
                    success:false,
                    message:"All fields are required"
                }
            )
        }

        const newSection = await Section.findByIdAndUpdate(sectionID,{sectionName:sectionName});


        
        return res.status(400).json(
            {
                success:true,
                message:"Section updated succesfully",
                newSection
            }
        )
    }
    catch(e){
        res.status(400).json(
            {
                success:false,
                message:"something went wrong in Section"
            }
        )
    }

}

exports.updateSection = async (req,res)=>{

    try{

        const{sectionID,courseID} = req.body;

        if(!sectionID){
            return  res.status(400).json(
                {
                    success:false,
                    message:"All fields are required"
                }
            )
        }

        const newSection = await Section.findByIdAndDelete(sectionID);


        
        return res.status(400).json(
            {
                success:true,
                message:"Section deleted succesfully",
                newSection
            }
        )
    }
    catch(e){
        res.status(400).json(
            {
                success:false,
                message:"something went wrong in Section"
            }
        )
    }

}