//with strem  and it should be inside of fs
//step1=>read th e file kis file ko read karna hai (file1.txt)
//step3:end=>This event is fired when there is no more data to read.
const fs = require('fs')
const http= require('http')
const server = http.createServer()
server.on("request",(req,res)=>{
//step1=>read th e file kis file ko read karna hai (file1.txt)
const rstream =fs.createReadStream('wss.txt')
//step2:data=>This event is fired when there is data is available to read.
// jitna bhee data read ho raha hai usko chunkdata mai store kar rahe hai 
rstream.on('data',(chunkdata)=>{
res.write(chunkdata)
})
//step3:end=>This event is fired when there is no more data to read.
rstream.on('end',()=>{
res.end()
})
// error=> This event is fired when there is any error receiving or writing data.
rstream.on("error",(err)=>{
console.error(err)
res.end("Page Not Found")
})
})
server.listen(3000, 'localhost')