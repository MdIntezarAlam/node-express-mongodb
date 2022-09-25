const mongoose = require("mongoose")
//validate ko requre kro first
const validator = require("validator")
//Database Creations
mongoose.connect("mongodb://localhost:27017/validates", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("connection is successfully")
    })
    .catch((err) => {
        console.log(err)
    })
// Type creations
//define schema (mera database mai documunet ka structure kya ahi 
// uska type ko define karna)(camelCase)
const userSchaema = new mongoose.Schema({
    name: {
        type: String, //validation name mai String hona 
    },
    city: String,
    videos: Number,
    auther: String,
    //email mai validation use kare 
    //condition satisfy hoga then email will be stored in the db
    email: {
        type: String,
        require: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})
// collection Creation [Or]
// Defining a Model 
const Play = mongoose.model("Plays", userSchaema)
// document
// create Document or inser a document in the collection
const createDocument = async () => {
    try {
        const playone = new Play({
            name: "Alam",
            city: "warnagal",
            videos: 10,
            auther: "Intezar",
            email: "int@gmail.com",
            active: true,
        })
        const playtwo = new Play({
            name: "Sha",
            city: "warnagal",
            videos: 10,
            auther: "Sha",
            email: "int@gmail.com",
            active: true,
        })
        //save the documents
        const result = await Play.insertMany([playone, playtwo])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
createDocument()