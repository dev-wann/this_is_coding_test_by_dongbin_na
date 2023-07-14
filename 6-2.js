// Chapter 6. 위에서 아래로
function countSort(input) {
    const max = Math.max(...input);
    const min = Math.min(...input);

    const count = new Array(max - min + 1).fill(0);
    for (let i = 0; i < input.length; i += 1) {
        count[input[i] - min] += 1;
    }

    const result = new Array(input.length);
    let idx = 0;
    for (let i = 0; i < count.length; i += 1) {
        for (let j = 0; j < count[i]; j += 1) {
            result[idx] = i + min;
            idx += 1;
        }
    }
    return result;
}

const data = [15, 30, 27, 12, 17, 22, 21, 21, 30];
const result = countSort(data);

let resultStr = `${result[0]}`;
for (let i = 1; i < result.length; i += 1) {
    resultStr += ` ${result[i]}`;
}
console.log(resultStr);