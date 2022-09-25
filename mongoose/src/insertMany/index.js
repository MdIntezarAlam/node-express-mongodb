// Note step to create
// 1=> connct to the databse
// 2=> use mongoose.Schema
// 3=>mongoode.module
// 4=>ab inser kro like inserOne, inserMany....

//database creation
const mongoose = require("mongoose")
//1=>connect to the data base
mongoose.connect("mongodb://localhost:27017/student", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        console.log("Successfuly Connect")
    )
    .catch((err) => console.log(err))
//2>mongoose.schema
//create a schema or type of the data which i will store
const studentSchema = new mongoose.Schema({
    name: String,
    class: String,
    marks: Number,
    clg: String,
    active: false,
    date: {
        type: Date,
        default: Date.now,
    }
})

//3>mongoose.module
//create a collections of the student database
const Result = mongoose.model("StudentData", studentSchema)

//4=>documnet
//ab data ko insert karna hai bas 
const studentDocument = async () => {
    try {
        const one_student = new Result({
            name: "Abrar",
            class: "B.tech",
            marks: 900,
            clg: "CITS",
            active: false

        })
        const sec_student = new Result({
            name: "Altaf",
            class: "B.tech",
            marks: 800,
            clg: "CITS",
            active: false

        })
        const th_student = new Result({
            name: "Mojib",
            class: "B.tech",
            marks: 910,
            clg: "CITS",
            active: false
        })
        const final_student = new Result({
            name: "Intezar",
            class: "B.tech",
            marks: 990,
            clg: "CITS",
            active: true
        })
        //inser many ka use kro nsted of save

        const res = await Result.insertMany([
            one_student,
            sec_student,
            th_student,
            final_student
        ])
        console.log(res)

    } catch (error) {
        console.log(error)
    }
}
studentDocument()
