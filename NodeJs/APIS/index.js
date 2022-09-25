//create a server,create a json(API) data,add in to the another file
//read json file from another file
const fs = require('fs')
const http = require('http')
const userApi=[{
    user1:{ name:"Alam", Age:21, Class:"B.Tecg"},
     user2:{ name:"Alam", Age:21, Class:"B.Tecg"}}]
//creating a server
const server = http.createServer((req,res)=>{
//reading file from json file at once
const data =fs.readFileSync('userApi.json','utf8')
    if(req.url==='/'){
        res.end("this is Bydefault Home page page")
    }
    else if(req.url==='/api'){
        res.end(data)
    }
})
const objectData =JSON.stringify(userApi)
creating file
fs.writeFile('userApi.json', objectData, (error)=>{
    console.log(error)
})
server.listen(3000, 'localhost',()=>{
    console.log('server is liting on localhost 3000')
})
