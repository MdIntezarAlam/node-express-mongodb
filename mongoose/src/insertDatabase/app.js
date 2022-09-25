// const mongoose = require("mongoose")
// const express = require("express")
// const port = 3000
// const app = express()

// const validator = require("validator")
// // const { application } = require("express")
// mongoose.connect("mongodb://localhost:27017/students", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log("connections is successful"))
//     .catch((err) => console.log(err))

//schema
// const collegeSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         uppercase:true,
//         max: 12,
//     },
//     class: String,
//     address: String,
//     email: {
//         type: String,
//         require: true,
//         unique: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error("bhaiya email correct likho invalid hai")
//             }
//         }
//     },
//     roll: Number,
// })
// //module

// const Student_details = mongoose.model("Student_details", collegeSchema)

// const collegeDocumetn = async () => {
//     try {
//         const st_one = new Student_details({
//             name: "Alam",
//             class: "B.tech",
//             address: "CDC",
//             email: "int@gmail.com",
//             roo: 58
//         })
//         const st_two = new Student_details({
//             name: "Chandu",
//             class: "B.tech",
//             address: "CDC",
//             email: "chand@ugmail.com",
//             roo: 35
//         })
//         const st_three = new Student_details({
//             name: "frhaan",
//             class: "B.tech",
//             address: "CDC",
//             email: "frhan@ugmail.com",
//             roo: 31
//         })
    
//         const result = await Student_details.insertMany([st_one, st_two, st_three])
//         // console.log(result);
//     } catch (error) {
//         console.log(error);
//     }

// }
// collegeDocumetn() //calling functions

//find the collection 
// const  gettindData = async()=>{
//    const ress =await Student_details.find({name:"Chandu"},{$set:{email:"chandu@gmail.com"}})
//    console.log(ress);
// }
// gettindData() //calling Function 

//updating data
// const  updatingData = async(_id)=>{
//     try {
//         const ress =await Student_details.updateOne({_id},{$set:{email:"chandu@gmail.com"}})
//         console.log(ress);
//     } catch (error) {
//         console.log(error);
//     }
// }
// updatingData("6326a5328f8fe0353f86b83c") //calling function



