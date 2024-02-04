const events = require('events')
const eventEmitter = new events.EventEmitter() // creating eventEmitter where we can 
// tell which function to call when some event is occured



// Create an event handler:
// this function can be executed when we want over some event trigger
const myEventHandler = function(){
    console.log("I hear a scream!")
}

// Assign the event handler to an event 
// here we specified to execute myEventHandler while someone emit 'scream' event
eventEmitter.on('scream', myEventHandler)

// Fire the 'scream' event:
// here we emited 'scream' event.
eventEmitter.emit('scream')