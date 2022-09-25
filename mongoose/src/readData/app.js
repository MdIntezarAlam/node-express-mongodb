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

    //name validation use karna hai it should be string 
    //it should be lowercase etc below
    name: {
        type: String,
        required: true,
        unique: true,
        upercase: true,
        trim: true,

    },
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
        //inser many ka use kro nsted of save
        const res = await Result.insertMany([
            one_student,
            sec_student,
        ])
        // console.log(res)

    } catch (error) {
        console.log(error)
    }
}
studentDocument()

//=======> read the data from the database )(Result is the database var)<========
// const readData = async () => {
//     const result = await Result.find()
//     console.log(result)
// }
// readData()


// =>>>>or opertors in mongobs=>>>>>>>>>>>>
// syntax=>db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )
// dono mao koi ek bhee cond true ho gya wo return kar dega
// const readData = async () => {
//     try {
//         const result = await Result.find({$or:[{class:"B.tech"}, {active:false}]})
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }
// readData()

//=>>>>and opertors in mongobs=>>>>>>>>>>>>
// syntax=>db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )
//dono  cond true hona jaruri hai
// const readData = async () => {
//         try {
//             const result = await Result.find({$and:[{class:"B.tech"}, {active:true}]})
//             console.log(result)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     readData()

// Count in mongoose and sort method both are same 
// const readData = async () => {
//         try {
//             const result = await Result.find({class:"B.tech"})
//             .select({name:1})
//             // .countDocuments();
//             .sort({name:1})
//             .sort({name:-1})
//             console.log(result)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     readData()


// updateOne & updateMany
//update the documents mai id unique hota hai uska use karna hai
// const updateoneDocument =async ()=>{
//     try {
//         const res=await Result.updateOne({name:"abrar"})
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }
// updateDocument("6325a1af70814711397a4986")


//update Many, findByIdAndUpdate
// const updatemanyDocument = async (_id) => {
//     try {
//         const res = await Result.findByIdAndUpdate({ _id},{$set:{marks:600}} )
//         console.log(res)
//     } catch (error) {
//      console.log(error)        
//     }
// }
// updatemanyDocument("6325a1af70814711397a4986")

//delete the document
// const deleteDocument = async (_id) => {
//     try {
//         const res = await Result.findByIdAndDelete({ _id},{name:"Altaf"} )
//         console.log(res)
//     } catch (error) {
//      console.log(error)        
//     }  
// }
// deleteDocument("6325a1af70814711397a4989")