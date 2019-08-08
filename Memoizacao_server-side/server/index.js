const process = require('process');

const start = process.hrtime();
console.log(fib(43));
const diff = process.hrtime(start);
console.log(`Tempo de execução: ${diff[0]}s ${diff[1]}ms`);

function fib(n){
    if (n <= 1) {
        return n;
    }
    return fib(n -1) + fib(n - 2);
}