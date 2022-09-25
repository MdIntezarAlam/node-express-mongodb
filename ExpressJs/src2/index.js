//task 1=> create a frontend part and host on expressjs
//create folder public>index.html
//create folder src>index.js 
//usebackend part and connect with staticPath(middleware)
const express = require('express')
const app = express()
const port = 5000
const path = require('path')
// find the path of front-end part from  public2/index.html
// console.log(path.join(__dirname,'../public2'))
const staticPath=path.join(__dirname,'../public2')
//to use the staticPath use the following syntax app.use(express.static('public'))
app.use(express.static(staticPath))
// console.log(staticPath)
app.get('/',(req,res)=>{
  // res.send("hii")
})
app.listen(port,()=>{
    console.log("serve is hosted on localhost 5000")
})
//successfuly done