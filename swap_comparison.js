function swapByTemp(arr) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}

function swapByDest(arr) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
}

let arr = [0, 1];

console.time('Swap by temporary variable');
for (let i = 0; i < 10000; i += 1) {
    swapByTemp(arr);
}
console.timeEnd('Swap by temporary variable');

console.time('Swap by destructuring');
for (let i = 0; i < 10000; i += 1) {
    swapByDest(arr);
}
console.timeEnd('Swap by destructuring');