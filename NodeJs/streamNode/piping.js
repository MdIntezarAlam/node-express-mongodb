const fs = require('fs')
const http = require('http')
//one line of code both reading and writing
const server= http.createServer((req,res)=>{
// Create a readable stream
const readingfile= fs.createReadStream('file.txt')
//kis file mai write karwana hai
readingfile.pipe(res)
})
server.listen(3000, 'localhost',()=>{
    console.log('server is listing on localhost:3000')
})