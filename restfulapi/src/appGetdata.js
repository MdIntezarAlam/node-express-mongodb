//make an api
const express = require("express")
const Student = require("./modles/students_schema")
const port= process.env.PORT||8000
require("./db/connection")
const app =express()

app.use(express.json())


//post the data using postman
app.post("/students", async(req,res)=>{
    const user = new Student(req.body) //data user ke andar aagaya hai ab pura
    try {
        const crateUser = await user.save()
        res.send(crateUser)
    } catch (error) {
        res.send(error)
    }
})
// get the data from database
app.get('/students',async(req,res)=>{
    try {
        //students hai modle ka name uska hi use karna hai
        const studentsData= await Student.find() ;
        res.send(studentsData)
        // console.log(studentsData)
    } catch (error) {
        res.send(error)   
    }
})

//get the Individula data from the database
//students ke baad jo likhe hai usko hi req,params.name, id....likhna hai
app.get("/students/:id",async(req,res)=>{
    // const  _id = req.params.id
    // console.log(req.params.id)
    // res.send(req.params.id)
    
    try {
        const  _id = req.params.id
        const studentData= await  Student.findById({_id})
        console.log(studentData)
        if(!studentData){
            return res.status(404).send();
        }
        else{
            res.send(studentData)
        }
} catch (error) {
}
})

app.listen(port,()=>{
    console.log(`Server is listining on localhost ${port}`)
})