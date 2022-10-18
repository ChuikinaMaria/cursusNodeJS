const { clearTimeout } = require('timers');

const start = performance.now();
setTimeout(() => {
   console.log(`Прошла секунда - ${performance.now() - start}`);
}, 1000);



function myFunc(arg) {
    console.log(`${arg} аргумент`);
}
setTimeout(myFunc, 1500, "Железный");



const timerId = setTimeout(() => {
    console.log('Boooooom!')
}, 5000);

setTimeout(() => {
    clearTimeout(timerId);
    console.log('Мы спасены! - отмена таймера');
}, 2000);



const intervalId = setInterval(() => {
    console.log(`время из setInterval:  ${performance.now()}`);
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('Убрали интервал');
}, 8000);



console.log('перед setImmidiate');

setImmediate(() => {
    console.log('Сам setImmediate')
});

console.log('После setImmidiate');



const timerId1 = setTimeout(() => {
    console.log('BOOOOOOM!')
}, 5000);

timerId1.unref();

setImmediate(() => {
    timerId1.ref();
})
