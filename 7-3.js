// Chapter 7. 떡볶이 떡 만들기
function findMaxHeight(array, target) {
    let start = 0;
    let end = Math.max(...array);

    function calcLength(array, height) {
        return array.reduce((acc, cur) => {
            let length = cur > height ? cur - height : 0;
            return acc + length;
        }, 0);
    }

    let mid;
    while(start < end) {
        mid = Math.floor((start + end) / 2);
        let length = calcLength(array, mid);

        if (length === target) break;
        if (length > target) start = mid + 1;
        if (length < target) end = mid - 1;
    }
    return mid;
}

const n = 4;
const m = 6;
const arr = [19, 15, 10, 17];

console.log(findMaxHeight(arr, m));