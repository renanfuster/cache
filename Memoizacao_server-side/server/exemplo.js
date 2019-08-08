const fibs = {};

/*function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}*/


function fib(n) {
    if (!fibs[n]) {
        if (n == 1) {
            return 1;
        }
        if (n == 2) {
            return 1;
        }
        fibs[n] = fib(n - 1) + fib(n - 2);
    }
    return fibs[n];
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(5));
console.log(fib(10000));