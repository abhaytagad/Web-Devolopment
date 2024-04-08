
const mongoose = require('mongoose');
require('dotenv').config()


exports.dbConnect = ()=>{
    mongoose.connect(process.env.DB_UR,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("db connected")})
    .catch(()=>{console.log("db not connected")})
}