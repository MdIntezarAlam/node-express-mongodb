const express = require("express")
const app = express()

app.set('view engine', 'pug')
// bhaiya yaha 1st mai folder ka name dena hai aur 2nd mai path dana hai tab hi chale ga 
app.set('views', './views')




app.get("/", (req, res) => {
    // res.send("jhii")
    res.render("Examp")
})
app.get("/in", (req, res) => {
    // res.send("jhii")
    res.render("In")
})


app.listen(3000, () => {
    console.log("server is listining on localhost 3000")
})