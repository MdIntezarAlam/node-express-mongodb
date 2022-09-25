// Task one 1:create data 2:conver in to the object
//3:add it in to the another file
//read the json file
const bioData = { name: 'Chan', Age: 21, Branch: 'CSE' }
//convet in to the objects
const jsonObjects = JSON.stringify(bioData)
const fs = require('fs')
//create a file in to another dir
fs.writeFile('task1.json', jsonObjects, err => {
  // console.log(err)
})
fs.readFile('task1.json', 'utf-8', (err, data) => {
console.log("reading data",data) 
// reading data {"name":"Chan","Age":21,"Branch":"CSE"}
  const objectJson = JSON.parse(data)
  console.log("originalData",objectJson)
//   originalData { name: 'Chan', Age: 21, Branch: 'CSE' }
})
