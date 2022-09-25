//2nd example
//select>post>body>row>json on postman mai
const express = require("express") 
const Student = require("./modles/students_schema")
require("./db/connection") //import the connection file
// const Student = require("./modles/students_schema") //import the serSchema and model fiel at a time 
const app = express()
const port = process.env.PORT || 8000

app.use(express.json()) //accessing the data in the form of json format

//postman maim body select keye hai ab req.body pass kre post main
// app.post("/students",async (req, res) => {
//     console.log(req.body) //req.body ke help se data ko get karsakte hai
//     //insert document to the database through postman stdunt student_schema se aaraha hai
//     const user = new Student(req.body) //data user ke andar aagaya hai ab pura
//     //ab databse mai send kar dena ha .savaese ye proms return karta hai
//     //if connection  true send it to db otherwise return err
//     // user.save()
// })
//async await
app.post("/students",async (req, res) => {
    const user = new Student(req.body) //data user ke andar aagaya hai ab pura
    try {
        const crateUser = await user.save()
        res.send(crateUser)
    }
     catch (error) {
        res.send(error)
    }
})
app.listen(port, () => {
    console.log(`localhost  ${port}`);
})