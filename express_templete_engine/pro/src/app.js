const express = require("express")
const app = express()

app.set('view engine', 'hbs') //step=>1
app.set('views', '../views') //step=>2

app.get('/', (req, res) => {
    res.render('file') //step=>3
})

app.listen(3000, () => {
    console.log("server is listining on localhost 3000")
})