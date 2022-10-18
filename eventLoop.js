const fs = require('fs');

console.log('Init');

setTimeout(() => {
    console.log(performance.now(), 'Timer 50')
}, 50)

setImmediate(() => {
    console.log("Immediate")
})

fs.readFile(__filename, () => {
    console.log('file readed')
})

setTimeout(() => {
    for (let i =0; i < 1_000_000_000; i++) {

    }
    console.log(performance.now(), 'аддский таймер');
    Promise.resolve().then(() => {
        console.log('I am Promise from аддский таймер!')
        
    })
    process.nextTick(() => console.log('I am Tick from аддский таймер!'))
}, 0)

Promise.resolve().then(() => {
    console.log('I am Promise!')
})

process.nextTick(() => console.log('Tick!'))

console.log('Final')