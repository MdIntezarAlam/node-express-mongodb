const mongoose= require("mongoose")
mongoose.connect("mongodb://localhost:27017/user",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() =>console.log("Connection successfuly"))
.catch((err) => {
    console.log("databse errros",err)
});