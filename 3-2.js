function largeNumRule(arr, N, M, K) {
    arr.sort((a, b) => b - a);
    const num1 = arr[0];
    const num2 = arr[1];
    const repCount = Math.floor(M / (K + 1));
    return num1 * (K * repCount + M % repCount) + num2 * repCount;
}

const N = 5;
const M = 8;
const K = 3;
const arr = [2, 4, 5, 4, 6];

console.log (largeNumRule(arr, N, M, K));