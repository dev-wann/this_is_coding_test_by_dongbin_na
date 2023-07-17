// Chapter 8. 효율적인 화폐 구성

const MAX = 999999;

function countMoneyTopDown(arr, target, memo) {
    // termination condition
    if (target === 0) return 0;
    if (target < 0) return MAX;

    if (memo[target]) return memo[target];  // memoization
    
    let result = MAX;
    for (let i = 0; i < arr.length; i += 1) {
        result = Math.min(result, countMoneyTopDown(arr, target - arr[i], memo) + 1);
    }

    memo[target] = result;  // memoization
    return result;
}

function countMoneyBottomUp(arr, target) {
    const table = new Array(target + 1).fill(MAX);

    // initialize
    for (let i = 0; i < arr.length; i += 1) {
        table[arr[i]] = 1;
    }

    // solve problem
    let index = Math.max(...arr) + 1;
    for (; index <= target; index += 1) {
        let result = MAX;
        for (let i = 0; i < arr.length; i += 1) {
            result = Math.min(result, table[index - arr[i]] + 1);
        }
        if (result > MAX) result = MAX;
        table[index] = result;
    }

    if (table[target] === MAX) return -1;
    return table[target];
}


const target = 15;
const moneyType = [2, 3];
const memo = {};
let result = countMoneyTopDown(moneyType, target, memo);
if (result === MAX) result = -1;
console.log(result);

result = countMoneyBottomUp(moneyType, target);
console.log(result);