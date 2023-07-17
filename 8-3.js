// Chapter 8. 개미 전사

function lootFoodTopDown(arr, index, memo) {
    if (index >= arr.length) return 0;  // termination condition
    if (memo[index]) return memo[index];    // memoization

    let result;
    // select this index
    result = lootFoodTopDown(arr, index + 2, memo) + arr[index];
    // don't select this index
    result = Math.max(result, lootFoodTopDown(arr, index + 1, memo));

    memo[index] = result;   // memoization
    return result;
}

function lootFoodBottomUp(arr) {
    const table = new Array(arr.length);
    table[arr.length - 1] = arr[arr.length - 1];
    table[arr.length - 2] = arr[arr.length - 2];
    let result
    for (let i = arr.length - 3; i >= 0; i -= 1) {
        // select i
        result = table[i + 2] + arr[i];
        // not select i
        result = Math.max(result, table[i + 1]);
        table[i] = result;
    }
    return table[0];
}

const storage = new Array(1000);
for (let i = 0; i < storage.length; i += 1) {
    storage[i] = Math.floor(Math.random()*10);
}

console.time('Top-down');
console.log(lootFoodTopDown(storage, 0, {}));
console.timeEnd('Top-down');

console.time('Bottom-up');
console.log(lootFoodBottomUp(storage));
console.timeEnd('Bottom-up');