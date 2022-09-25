//fire event first time
const EventEmitter= require('events')
const event=new EventEmitter()
event.on("fire",()=>{
console.log("Fire the Event please")
})
event.emit("fire")

