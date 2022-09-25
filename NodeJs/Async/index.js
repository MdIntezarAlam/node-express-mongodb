// // Asynchronous use Callback and it takes two aru error&data Fun
// const fs = require('fs')
// //1=> createFile with callback function
// fs.writeFile('read.txt', 'creating reading file', (erro, data) => {
//   console.log('file is created Successfully')
//   console.log(null)
// })
// //2=> append file with callback function
// fs.appendFile('read.txt', 'Adding new messages..', (error, data) => {
//   console.log('Successfully Append')
// })
// //3=> read file with callback function
// //utf8=> reading without bufferdata
// fs.readFile('read.txt', 'utf8', (error, data) => {
//   // console.log('successfully reading from Ffile')
//   console.log(data) //reading data
//   console.log(error) // if any error it wiil print
// })
// // 4=>rename with call back function
// fs.rename('./read.txt', 'renamefile.txt', (error, data) => {
//   console.log('file get rename')
//   console.log(erro)
// })
