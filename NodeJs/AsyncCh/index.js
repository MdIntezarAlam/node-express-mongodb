// Asynchronous Function Task
// 1=> create a folder
// 2=> create a file in it named bio.txt and data in to it
// 3=> add more data in to the file at the end of the existing data
// 4=> Read the data without getting the buffer data at first
// //file encoding
// 5=>Rename the file name to movbio.txt
// 6=>Now delete the both the file & folder

const fs = require('fs')
//1=>folder
fs.mkdir('Int',(err)=>{
  console.log('folder created')
})
//2=> creating file inside the folder
fs.writeFile('Int/int.text', 'Crating new File', (error, data) => {
  console.log('Successfully created file')
})
//3=>adding more data
fs.appendFile('Int/int.text', "Adding more data in the existing file",(error, data)=>{
    console.log("Adding Successfully new data")
})
// 4=> Read the data without getting the buffer data at first
const readingData=fs.readFileSync('Int/int.text','utf-8',(error, data)=>{
    console.log('reading file from int.text file')
    console.log(error)
})
console.log(readingData)
// 6=>Now delete the file & folder
fs.unlink('Int/int.text', (error, data) => {
  console.log('file deleted')
})
// Now delete the folder
fs.rmdir('Int', (error, data) => {
  console.log('folder deleted')
console.log(error)
})
