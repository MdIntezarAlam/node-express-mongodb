//create server
const http = require('http')
const fs = require('fs')
const server= http.createServer((req,res)=>{
 const data =  fs.readFileSync('userApi.json','utf8')
    if(req.url==='/'){
        res.end("creating Home Page")
    }
    else if(req.url==='/about'){
        res.end("creating about Page")
    }
    else if(req.url==='/api'){
        res.writeHead(200, {"Content-type":"application/json"})
    res.end(data)
    }
})
server.listen(3000, 'localhost',()=>{
    console.log('listing on localhost 3000')
})