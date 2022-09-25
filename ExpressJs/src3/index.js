//404 page
const express = require('express')
const path = require('path') 
const app = express()
const pagePath = path.join(__dirname,'../public3')
app.use(express.static(pagePath)
)
app.get("/",(req,res)=>{
    res.render('index') //file name
})
app.get('/about',(req,res)=>{
res.send('About page')
})
app.get('*',(req,res)=>{
    res.send("Page Not Found 404")
})
app.listen(3000,()=>{
    console.log('port on 3000')
})