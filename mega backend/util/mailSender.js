const nodemailer = require('nodemailer');


const mailSender = async (email,title,body)=>{
    try{

        const transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })

        console.log("created transporter")

        let info = await transporter.sendMail({
            from:'StudyNotion',
            to:email,
            subject:title,
            html:body
        })
        console.log("mail sent Succesfully")
    }
    catch(e){
        console.log("could not create transporter")
    }
}

module.exports = mailSender;