//define the schema of databse
const mongoose = require("mongoose")

const collegeSchema =  mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase:true,
    },
     class:{
        type: String,
        unique: true,
        require: true,
        uppercase:true,
     }
})

//define the modle or insert the value
const College = new mongoose.model("College",collegeSchema)

//export the modle
// modle.exports= College
module.exports= College

