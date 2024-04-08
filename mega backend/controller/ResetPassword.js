
const User = require('../model/User')
const bcrypt = require('bcrypt')
const mailSender = require('../util/mailSender');

exports.resetPasswordMail = async (req,res)=>{

    try{

        const {email} = req.body;

        const user = await User.findOne({email});

        if (!user){
            return res.status(400).json({
                success:true,
                meassage:"user not exist"

            })

        }

        const token = crypto.randomUUID();

        const updatedDetails = await User.findOneAndUpdate(email,{token:token,resetPasswordExpires:Date.now()+5*60*1000},{new:true})

        const url = `https://localhost:3000/update-password/${token}`

        await mailSender(email,"password reset Link",`Link : ${url}`)

        res.status(400).json({
            success:true,
            meassage:"reset password mail sent"
        })

    }
    catch(e){
        res.status(400).json({
            success:false,
            meassage:"could not reset password"
        })
    }
}


exports.resetPassword = async(req,res) =>{

    try{
        const{password,confirmPassord,token} = req.body;

        const user = await User.findOne({token});


        if (password != confirmPassord){
            return res.status(400).json({
                success:false,
                meassage:" password != confirmpasseord"
            })
        }

        if (user.resetPasswordExpires  < Date.now() ){
            return res.status(400).json({
                success:false,
                meassage:"Time expired"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)

        await User.findOneAndUpdate({token},{password:hashedPassword},{new:true});

        res.status(200).json({
            success:true,
            message:"reset succesfully"
        })
    }
    catch(e){
        res.status(400).json({
            success:false,
            message:" could not reset password"
        })
    }
}