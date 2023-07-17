function fibonacciSimple(value) {
    if (value === 1 || value === 2) return 1;
    let result = fibonacciSimple(value - 1) + fibonacciSimple(value - 2);
    return result;
}

function fibonacciTopDown(value, memo) {
    if (value === 1 || value === 2) return 1;
    if (memo[value]) return memo[value];
    let result = fibonacciTopDown(value - 1, memo) + fibonacciTopDown(value - 2, memo);
    memo[value] = result;
    return result; 
}

function fibonacciBottomUp(value) {
    const table = new Array(value + 1);
    table[1] = 1;
    table[2] = 1;

    for (let i = 3; i <= value; i += 1) {
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[value];
}

// console.time('Brute-force');
// fibonacciSimple(45);
// console.timeEnd('Brute-force');

console.time('Top-down');
fibonacciTopDown(10000, {});
console.timeEnd('Top-down');

console.time('Bottom-up');
fibonacciBottomUp(3000);
console.timeEnd('Bottom-up');
