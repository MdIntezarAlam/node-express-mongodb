const express = require("express")
const app = express()
//using templete engine like hbs, pug
// to  use the templete engine
//create a views folder inside create any file with .hbs, .pug etcwrite html file
// step1=> write app.set("view engine","hbs")
//in hbs place we can write any templete engine which i will use
//step2=>app.set("folder","folderPath")
//step2=>app.set("views","./views")
// step3=>in the plcae of res.send write res.render('filename')
app.set('view engine', 'hbs') //step=>1
app.set('views', './views') //step=>2

app.get('/', (req, res) => {
    res.render('hbsfile') //step=>3
})
app.get("/file2", (req, res) => {
    res.render("hbsfile2")
})
app.listen(3000, () => {
    console.log("server is listining on localhost 3000")
})