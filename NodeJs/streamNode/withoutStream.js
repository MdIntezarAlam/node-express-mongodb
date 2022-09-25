//create server//create file//read file from other file
//fire an event on the place of listin
const http= require('http')
const server = http.createServer();
server.on("request",(req,res)=>{
    const fs = require('fs');
    fs.readFile("notStr.txt",(err,data)=>{
   if(err) return console.error(err)
   res.end(data.toString())
    })
})
server.listen(3000,'localhost') 