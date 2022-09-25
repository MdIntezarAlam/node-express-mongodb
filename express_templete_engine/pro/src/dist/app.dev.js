"use strict";

var express = require("express");

var app = express();
app.set('view engine', 'hbs'); //step=>1

app.set('views', '../views'); //step=>2

app.get('/', function (req, res) {
  res.render('file'); //step=>3
});
app.listen(3000, function () {
  console.log("server is listining on localhost 3000");
});