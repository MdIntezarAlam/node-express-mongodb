//how to send json data in expressjs
// res.send() and res.json() both are same used to send json file
const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send("this is Home page")
})
app.get('/jso',(req,res)=>{
    // res.send({id:1, name:"Alam", clas:'B.Tech'})
    res.json([
        {id:1, name:"Alam", clas:'B.Tech'},
        {id:2, name:"Bhai", clas:'UPSC'}
    ])
})
app.listen(3000, 'localhost',()=>{
    console.log("server is listning on localhost 3000")
})