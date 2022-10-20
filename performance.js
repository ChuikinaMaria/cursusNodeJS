const perf_hooks = require('perf_hooks');

test = perf_hooks.performance.timerify(test);  // оборачивание всей функции для ее измерения

const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
   console.log(items.getEntries());
    const entry = items.getEntriesByName('slow').pop();
    console.log(`${entry.name}: ${entry.duration}`);
    observer.disconnect();
});
performanceObserver.observe({entryTypes: ['measure', 'function'] });  

function test() {
    const arr =[];
    for(let i = 0; i < 10_000_000; i++) {
        arr.push(i*i);
    }
}

function slow() {
    performance.mark('start');      // для измерения куска кода
    const arr =[];
    for(let i = 0; i < 10_000_000; i++) {
        arr.push(i*i);
    }
    performance.mark('end');
    performance.measure('slow', 'start', 'end');
    //console.log(performance.getEntriesByName('slow'));
}

slow();
test();