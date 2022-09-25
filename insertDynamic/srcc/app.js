const express= require("express")
// const Student = require("../src/modles/students_schema")
const port = process.env.PORT|| 3000
//import the databe
require("./database/clgdb")
//import the user schema & model
const College = require("./modle/clgschema")
const app = express()

app.get("/",(req,res)=>{
    res.send("sending data to the server")
})
app.post("/colleges",(req,res)=>{
    console.log(req.body)
    res.send("hello from server Sides.......")
})

//inser the documetns in to the databse 
// const insertDocument=async()=>{
//     try {
//         const one_student = new College({
//             name: "Altaf",
//             email: "b.tech",
//             class: "800",

//         }) 
//            const sec_student = new College({
//             name: "Altaf",
//             email: "b.tech",
//             class: "800",

//         })
//         const res = await College.insertMany([
//             one_student,
//             sec_student,
//         ])
//         console.log(res)

//     } catch (errorss) {
//         console.log("Somthing is errors",errorss)
//     }
// }
// insertDocument()
app.listen(port,()=>{
    console.log(`Server is listining on localhost ${port}`)
})