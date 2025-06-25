// on : listen for an event
// emit : emit an event
// once : listen for an event only once

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on method
customEmitter.on('response', () => {console.log('data received 1')})
customEmitter.on('response', (name,age) => {console.log('data received 2', name, "----", age)})

// emit method
// customEmitter.emit('response')
customEmitter.emit('response', 'ayush', 21)