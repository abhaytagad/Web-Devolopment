const User = require('../model/User')
const otpGenerator = require('otp-generator')
const OTP = require('../model/OTP')
const bcrypt = require('bcrypt')
const Profile = require('../model/Profile')
const jwt = require('jsonwebtoken')

exports.sendOtp = async (req,res)=>{
    
    try{
        const {email} = req.body;

        const alredyExist = await User.findOne({email:email});

        if (alredyExist){
            return res.status(401).json({
                success:false,
                message:"User Already Exist"
            })
        }

        var otp = otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
        })

        console.log(otp);

        const unique = await OTP.findOne({otp:otp})

        while(unique){
            var otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false
            })
            const unique = await OTP.findOne({otp:otp})
        }

        const response = await OTP.create({email:email,otp:otp})

        res.status(200).json(
            {
                success:true,
                message:"otp succesfully send"
            }
        )
    }
    catch(e){

        res.status(400).json(
            {
                success:false,
                message:"otp not  send"
            }
        )
    }
}


exports.signUp = async (req,res)=>{

    try{

        const{email,firstName,lastName,password,confirmPassword,accountType,contactNumber} = req.body;

        const already = await User.findOne({email});

        if (already){
            return res.status(401).json({
                success:false,
                message:"user Alresdy exist"
            })
        }

        if (password != confirmPassword){
            return res.status(401).json({
                success:false,
                message:"Confirm and password doesnot match"
            })
        }

        if (!firstName || !lastName || !email || !password || !confirmPassword ){

            return res.status(401).json({
                success:flase,
                message:" All fields are mendatory"
            })
        }

        const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);

        if (recentOtp.length == 0  ){
            return res.status(401).json({
                success:flase,
                message:"OTP not found"
            })
        }

        const additionDetails =await Profile.create({
            gender:null,
            dateOfBirth:null,
            about:null,
            contactNumber:null
        })

        const hashedPassword = bcrypt.hash(password,10)

        const response = await User.create({firstName,lastName,hashedPassword,accountType,additionDetails:additionDetails._id,
        image:`https://ui-avatars.com/api/?name=${firstName}+${lastName}`})

        res.status(200).json({
            success:true,
            meassage:"user created succesfully"
        })
    }
    catch(e){
        res.status(400).json({
            success:false,
            meassage:"user can not create"
        })
    }  
}

exports.login = async (req,res)=>{

    try{

        const{email,password} = req.body;

        if (!email || !password){
            return res.status(401).json({
                success:false,
                message:"All fields are required"
            })
        }

        const already = await User.findOne({email});

        if (!already){
            return res.status(401).json({
                success:false,
                message:"user does not exist"
            })
        }

        const checkPassword = await bcrypt.compare(password,already.password);

        if (!checkPassword){
            return res.status(401).json({
                success:false,
                message:"password does not match"
            })
        }

        const payload = {
            email:already.email,
            accountType:already.accountType,
            id:already._id
        }

        const token =  jwt.sign(payload,process.env.JWT_SECRETE,{expiresIn:"2h"})

        already.token = token;
        already.password = undefined

        res.status(200).json({
            success:true,
            token,
            meassage:"Loged in"
        })
    }
    catch(e){
        res.status(400).json({
            success:false,
            
            meassage:"error in loging"
        })
    }
}