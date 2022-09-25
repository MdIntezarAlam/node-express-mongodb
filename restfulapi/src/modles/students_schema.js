const mongoose= require("mongoose")
// var validator = require('validator');
//with the help of new keywod
const studentSchema= mongoose.Schema({
    //with validation 
name:{
    type:String,
    required:true,
    // minlength:3,
},
email:{
    type:String,
    required:true,
    // unique:[true,"Email is Already present"],
    // validate(value){
    //     if(!validator.isEmail()){
    //         throw new Error("Invalid Email")
    //     }
    // }
},
phone:{
    type:Number,
    min:10,
    required:true,
    unique:true,
},
address:{
    type:String,
    required:true,
},
})


//define the module
//collections it shoud be capital letter with new keyword

const Student=new mongoose.model("Student", studentSchema)

//export the modle


module.exports= Student;