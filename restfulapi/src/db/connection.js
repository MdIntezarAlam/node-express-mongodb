//crate a connection of database and export in to app.js
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/students-api",{
    useNewUrlParser:true, 
    useUnifiedTopology:true,
    // useCreateIndex: true,
})
.then(() => console.log("connection sussessfuly"))
.catch((err) =>console.log(err));