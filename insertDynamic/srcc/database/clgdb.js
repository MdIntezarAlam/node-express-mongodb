const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/college-app",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("database is Successfuly Connect"))
.catch((error)=>{
    console.log(error)
})