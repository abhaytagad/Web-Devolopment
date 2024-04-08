const jwt = require('jsonwebtoken')

exports.auth = async (req,res,next)=>{

    try{
        const token = req.body;

        if (!token){
            res.status(400).json({
                success:false,
                message:"token is missing"
            })
        }

        try{
            const decode = jwt.verify(token,process.env.JWT_SECRETE)
            req.user = decode
        }
        catch(e){

            res.status(400).json({
                success:false,
                message:"token invalid"
            })
        }
        next();

    }
    catch(e){

        res.status(400).json({
            success:false,
            message:"token validation issue"
        })
    }
}

exports.isStudent = async (req,res,next)=>{

    try{

        if (req.user.accountType !== "Student"){
            res.status(400).json({
                success:false,
                message:"invalid account type"
            })
        }
        next();
    }
    catch(e){
        res.status(400).json({
            success:false,
            message:"error in validation of account type"
        })
    }
}

exports.isAdmin = async (req,res,next)=>{

    try{

        if (req.user.accountType !== "Admin"){
            res.status(400).json({
                success:false,
                message:"invalid account type"
            })
        }
        next();
    }
    catch(e){
        res.status(400).json({
            success:false,
            message:"error in validation of account type"
        })
    }
}

exports.isInstructor = async (req,res,next)=>{

    try{

        if (req.user.accountType !== "Instructor"){
            res.status(400).json({
                success:false,
                message:"invalid account type"
            })
        }
        next();
    }
    catch(e){
        res.status(400).json({
            success:false,
            message:"error in validation of account type"
        })
    }
}