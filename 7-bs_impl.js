// recursive
function binarySearchRecursive(array, target, start, end) {
    let mid = Math.floor((start + end) / 2);
    if (start > end) return undefined;

    if (array[mid] === target) return mid;
    if (array[mid] < target) {
        return binarySearchRecursive(array, target, mid + 1, end);
    }
    return binarySearchRecursive(array, target, start, mid - 1);
}

function binarySearchLoop(array, target, start, end) {
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (array[mid] === target) return mid;
        if (array[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return undefined;
}


const data = [1, 2, 4, 7, 8, 10, 15, 16, 19];
console.time('By recursive');
binarySearchRecursive(data, 1, 0, data.length - 1);
console.timeEnd('By recursive');
console.time('By loop');
binarySearchLoop(data, 1, 0, data.length - 1);
console.timeEnd('By loop');