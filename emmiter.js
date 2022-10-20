const eventEmmiter = require('events');

const myEmmiter = new eventEmmiter();

const logDbConnection = () => {
    console.log("DB connected")
};

myEmmiter.addListener("connected", logDbConnection);
myEmmiter.emit("connected");

myEmmiter.removeListener("connected", logDbConnection);
//myEmmiter.off("connected", logDbConnection);
//myEmmiter.removeAllListeners("connected")
myEmmiter.emit("connected");

myEmmiter.on("msg", (data) => {
    console.log(`I have a  ${data}`)
});

myEmmiter.emit("msg", "good day");

myEmmiter.once('once', ()=>{
    console.log("This happend once and no more")
})
myEmmiter.emit("once");
myEmmiter.emit("once");

console.log(myEmmiter.getMaxListeners());
myEmmiter.setMaxListeners(2);
console.log(myEmmiter.getMaxListeners());

console.log(myEmmiter.listenerCount('msg'));
console.log(myEmmiter.listenerCount('once'));

myEmmiter.prependListener('msg', () => {
    console.log("I was added later, but I am added with PREpendlistener ")
})
myEmmiter.emit("msg", "good day");
console.log(myEmmiter.listeners('msg'));
console.log(myEmmiter.eventNames());


myEmmiter.on('error', (err) => {
    console.log(`Такая вот ошибка ${err.message}`)
})
myEmmiter.emit('error', new Error('BOOOOOOOM!'));



const target = new EventTarget();

const logTarget = () => {
    console.log('Connected to Target')
}

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));