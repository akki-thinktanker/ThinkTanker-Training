const events = require('events')
const eventEmitter = new events.EventEmitter()

const sayHello = () => {
    console.log('Hello Akki')
}

eventEmitter.on('hello', sayHello)


eventEmitter.emit('hello')
eventEmitter.emit('hello')
eventEmitter.emit('hello')
eventEmitter.emit('hello')
eventEmitter.emit('hello')
eventEmitter.emit('hello')
eventEmitter.emit('hello')
eventEmitter.emit('hello')
eventEmitter.emit('hello')
eventEmitter.emit('hello')