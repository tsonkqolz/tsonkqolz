import EventEmitter from "events";

const eventEmitter = new EventEmitter()
const nice = () => console.log('lol');
eventEmitter.on('gg', nice)
eventEmitter.emit('gg')