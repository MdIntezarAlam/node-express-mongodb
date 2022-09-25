//EventEmitter mean creating class with the help of events
const EventEmitter= require('events')
//using new keyword declere a class
const event= new EventEmitter();  
event.on('sayMyName',()=>{
    console.log("Calling 1st event Name is....")
})
event.on('sayMyName',()=>{
    console.log("Calling second event....")
})
event.on('sayMyName',()=>{
    console.log("Calling 3rd events....")
})
//caling the events
//in 1 event we can call multiple times
event.emit("sayMyName") 