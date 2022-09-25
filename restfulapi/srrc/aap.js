const express = require("express")
const port = process.env.PORT||8000
require("./dbb/dbs")
const User = require("./modlee/schema")

const app = express()

app.use(express.json())

// <=================post the data=>>>>>>>>>>
// <<<<<<<<<<<<<<=with then and cath=>>>>>>>>>>
// app.post("/users",(req,res)=>{
//     const userData = new User(req.body)
//     userData.save().then(()=>{
//         res.send(userData)
//     })
//     .catch((err)=>{
//         res.send(err)
//     })
// })
//<===============with try and cathc=>>>>>>>>>
app.post("/users",async(req,res)=>{
    const userData= new User(req.body)
    try {
        const createUser= await userData.save()
        res.send(createUser) 
        console.log(createUser)
    } catch (error) {
        res.send(error)
    }
})
// =>>>>>>>>>>Get the alldata=>>>>>>>>>>>>>>>
app.get('/users',async(req,res)=>{
    try {
        const newUser =await User.find()
        res.send(newUser)
    } catch (error) {
        res.send(error)
    }
})

// =>>>>>>>>> Get the data by id route ke baad /:id likhe=>>>>>>>>>>>>>>
// app.get("/users/:id",async(req,res)=>{
//     try {
//         const  _id = req.params.id
//         const userIds= await  User.findById({_id})
//         console.log(userIds)
//         if(!userIds){
//             return res.status(404).send();
//         }
//         else{
//             res.send(userIds)
//         }
//     } catch (error) {
//         res.send(error)
//         console.log(gettingId)
//     }
// })

// delete the data from database by id
// app.delete('/users/:id',async(req,res)=>{
//     try {
//         const id= req.params.id
//         const deleteUser =await  User.findByIdAndDelete(id)
//         if(!id){
//            return res.status(400).send()
//         }
//         else{
//             res.send(deleteUser)
//         }
//     } catch (error) {
//         res.status(500).send(error)   
//     }
// })

//<==============update the data in to the database=>>>>>
// findByIdAndUpdate()
// update karne ke leye postman>patch>body>row>json> then update mean write data
// userEmail ko change karna hai usko ko like
app.patch("/users/:id",async(req,res)=>{
    try {
        const _id = req.params.id
        const updateUser = await User.findByIdAndUpdate(_id,req.body );
        res.send(updateUser)
    } catch (error) {
        res.status(400).send(updateUser)
    }
})


app.listen(port,()=>{
    console.log(`localhost on ${port}`)
})