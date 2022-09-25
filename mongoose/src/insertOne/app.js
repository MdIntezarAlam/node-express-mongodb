const mongoose = require("mongoose")
//Database Creations
mongoose.connect("mongodb://localhost:27017/newDB", {
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
//define schema (mera database mai documunet ka structure kya
// uska type ko define karna)(camelCase)
const userSchaema = new mongoose.Schema({
    name: {
        type: String, //validation name mai String hona 
    },
    city: String,
    videos: Number,
    auther: String,
    active: Boolean,
    //validation kis date ko update huwa hai wo hai
    date: {
        type: Date,
        default: Date.now

    }
})

// collection Creation [Or]
// Defining a Model 
// Models are defined through the Schema interface.
//esme class create karna hai pascaleCase
//module ke inside 2 paramaters 1=> collectionName(capitalletter)
// 2=>quma dala kar schema define karna hai structure kaisa hoga
//schema definded hai bas usekarlena hai
const Play = mongoose.model("Plays", userSchaema)

// document
// create Document or inser a document in the collection

//reactPlay list document ka name hai aur 1st doucment hai ye
//already schema set kar deya hu ab value put karna hai
//it returns promiss so use async await and use try catch


const createDocument = async () => {
    try {
        const reatPlaylist = new Play({
            name: "Alam",
            city: "warnagal",
            videos: 10,
            auther: "Intezar",
            active: true,
        })
        //save the documents
        const result =await reatPlaylist.save()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
createDocument()