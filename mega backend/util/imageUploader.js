
const cloudinary = require('cloudinary').v2;

exports.uploadImage = async(file,folder)=>{

    const options = {folder}

    return await cloudinary.uploader.upload(file.tempFilePath,options)
}