const mongoose= require("mongoose")

const userSchema =  mongoose.Schema({
userName:{
    type:String,
    unique:true,
},
userEmail:{
    type:String,
    unique:true,
},
userId:{
    type:Number,
    unique:true,
}
})

const User = new mongoose.model("User",userSchema)


module.exports = User