// Note=> i have created a public folder inside>style>folder>style.css>file
// and src filder>index.js file
// and i used here as a __dirname
//syntax=>express.static(root, [options])
//where root=> directory path
//there r 2 types of path,
//1=>Relative(.././), 2:absolute(__filename or __dirname,'../dirname')
 //to use middleware we must require=> app.use(express.static('public'))
 //we use absolute
 const path = require('path')
 const express = require('express')
 const app = express()
 const port = 3000
const staticPath=path.join(__dirname,'../public')
app.use(express.static(staticPath));
 app.get('/',(req,res)=>{
    res.send("Hello Home Page")
 })
 app.listen(port,'localhost',()=>{
    console.log('listining on localhost 3000')
 })