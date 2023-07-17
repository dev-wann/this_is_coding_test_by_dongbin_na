// Chapter 8. 1로 만들기

const memo = new Map();
function makeOneTopDown(value) {
    if (value === 1) return 0;

    // check memo
    if (memo.get(value)) return memo.get(value);

    let count = Number.MAX_SAFE_INTEGER;
    if (value % 5 === 0) {
        count = Math.min(count, makeOneTopDown(value / 5) + 1);
    }
    if (value % 3 === 0) {
        count = Math.min(count, makeOneTopDown(value / 3) + 1);
    }
    count = Math.min(count, makeOneTopDown(value - 1) + 1);

    memo.set(value, count);
    return count;
}

function makeOneBottomUp(value) {
    const dpTable = new Array(30001);
    dpTable[1] = 0;
    for (let i = 2; i <= value; i += 1) {
        let count = Number.MAX_SAFE_INTEGER;
        if (i % 5 === 0) {
            count = Math.min(count, dpTable[i / 5] + 1);
        }
        if (i % 3 === 0) {
            count = Math.min(count, dpTable[i / 3] + 1);
        }
        count = Math.min(count, dpTable[i - 1] + 1);
        dpTable[i] = count;
        if (i === value) break;
    }
    return dpTable[value];
}

const input = 3333;
console.time('TopDown');
const topDown = makeOneTopDown(input);
console.timeEnd('TopDown');
console.log(topDown);

console.time('BottomUp');
const bottomUp = makeOneBottomUp(input);
console.timeEnd('BottomUp');
console.log(bottomUp);