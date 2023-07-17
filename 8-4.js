// Chapter 8. 바닥 공사

function fillFloorTopDown(length, memo) {
    // termination condition
    if (length === 1) return 1;
    if (length === 2) return 3;

    if (memo[length]) return memo[length]; // memoization

    let result = 0;
    // fill 1 x 2 or 2 x 2
    result = 2 * fillFloorTopDown(length - 2, memo);
    // fill 2 x 1
    result += fillFloorTopDown(length - 1, memo);

    memo[length] = result;

    return result;
}

function fillFloorBottomUp(length) {
    const table = new Array(length + 1);
    table[1] = 1;
    table[2] = 3;
    for (let i = 3; i <= length; i += 1) {
        table[i] = 2 * table[i - 2] + table[i - 1];
    }
    return table[length];
}

const n = 100;
console.time('Top-down');
console.log(fillFloorTopDown(n, {}));
console.timeEnd('Top-down');

console.time('Bottom-up');
console.log(fillFloorBottomUp(n));
console.timeEnd('Bottom-up');