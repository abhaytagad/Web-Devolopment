const Course = require("../model/Course");
const Tag = require("../model/Tag");
const User = require("../model/User");
const { uploadImage } = require("../util/imageUploader");

exports.createCourse = async (req,res)=>{

    try{
        const{courseName,courseDescription,whatYouWillLearn,price,tag} = req.body;

        const thumbNail = req.files.thumbNailImage;

        if (!courseName || !courseDescription || !whatYouWillLearn || !price || !tag){
            return res.status(400).json({
                success:false,
                message:"All fields are Required"
            })
        }

        const userId = req.user.id;
        const userDetails = await User.findById({userId})

        if (!userDetails){
            return res.status(400).json({
                success:false,
                message:"instructor not found"
            })
        }

        const tagDetails = await Tag.findById({tag})

        if (!tagDetails){
            return res.status(400).json({
                success:false,
                message:"Tag not found"
            })
        }

        const thumnailImage = await uploadImage(thumbNail,process.env.FOLDER)

        const newCourse = await Course.create({courseName,courseDescription,instructor:userDetails,whatYouWilllearn:whatYouWillLearn,price:price,tag:tagDetails._id,thumbnail: thumnailImage.secure_url})

        await User.findByIdAndUpdate(userDetails._id,{$push:{courses:newCourse._id }})
        res.status(200).json({
            success:true,
            message:"Course added succesfully"
        })
    }
    catch(e){
        res.status(400).json({
            success:true,
            message:"Course could not"
        })
    }
}

exports.showAllCourses = async (req,res)=>{

    try{
        const allCourses = await Course.find({});
        return res.status(200).json({
            success:true,
            message:'fetched all data'
        })

    }
    catch(e){
        return res.status(400).json({
            success:true,
            message:'could not fetched all data'
        })

    }
}