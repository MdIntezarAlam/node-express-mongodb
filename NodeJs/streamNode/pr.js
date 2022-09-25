// readable File
const fs = require('fs')
const http= require('http')
const server = http.createServer((req,res)=>{
//read the file like file one.txt from other folder
const readingFile = fs.createReadStream('file.txt')
//there are three condion 
// 1=>error, 2=>data, 3=>end
//1=>check the conditio use error event with callback function
readingFile.on("error",(err)=>{
    console.log(err)
})
//2=>read the data from the file use data event &
// pass the argu (chunkdata) with callback fun
readingFile.on("data",(chunkdata)=>{
    res.end(chunkdata)
})
//3=>end the file pass use end event
readingFile.on("end",()=>{
    res.end()
})
})
server.listen(3000,"localhost",()=>{
    console.log("server is listing on localhost:3000")
})

//Write file with stream
const fs = require('fs')
const http= require('http')
const server = http.createServer((req,res)=>{
//res.end('hii')
const writingFile= fs.createWriteStream('writefile1.txt')
writingFile.write("i am writing somtiong to the file")
})
server.listen(3000, 'localhost',()=>{
    console.log("server is listing on localhost 3000")
})





