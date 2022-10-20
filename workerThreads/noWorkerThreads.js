const factorial = require('./factorial');

const compute = (array) => {
    const arr = [];
    for (let i = 0; i < 100_000_000; i++) {
        arr.push(i * i);
    }
    return array.map(el => factorial(el));
};


const main = () => {
    try {
        performance.mark('start');
        const result = [
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50])
        ];
        console.log(result);
    
        performance.mark('end');
        performance.measure('main', 'start', 'end');
        console.log(performance.getEntriesByName('main').pop());
    } catch (e) {
        console.log(e.message)
    }
}
setTimeout(() => {
    console.log('таймер на 2 сек')
}, 2000)

main();