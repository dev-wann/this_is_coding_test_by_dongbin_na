console.time('Object');
let obj;
for (let i = 0; i < 100000; i += 1) {
    obj = new Object();
}
console.timeEnd('Object');
console.time('Array');
let arr;
for (let i = 0; i < 100000; i += 1) {
    arr = new Array();
}
console.timeEnd('Array');
console.time('Map');
let map;
for (let i = 0; i < 100000; i += 1) {
    map = new Map();
}
console.timeEnd('Map');
console.time('Set');
let set;
for (let i = 0; i < 100000; i += 1) {
    set = new Set();
}
console.timeEnd('Set');