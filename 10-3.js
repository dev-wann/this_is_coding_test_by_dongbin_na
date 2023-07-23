// Chapter 10. 도시 분할 계획

function findParent(parentArr, x) {
    if (parentArr[x] !== x) {
        parentArr[x] = findParent(parentArr, parentArr[x]);
    }
    return parentArr[x];
}

function unionParent(parentArr, a, b) {
    let parentA = findParent(parentArr, a);
    let parentB = findParent(parentArr, b);
    if (parentA < parentB) {
        parentArr[parentB] = parentA;
    } else {
        parentArr[parentA] = parentB;
    }
}

function solution(n, edges) {
    // Kruscal algorithm but exclude the longest edge
    edges.sort((a, b) => a[2] - b[2]);
    
    const parentArray = new Array(n + 1);
    for (let i = 0; i < n + 1; i += 1) parentArray[i] = i;

    let result = 0, max = 0;
    edges.forEach(edge => {
        if (findParent(parentArray, edge[0]) !== findParent(parentArray, edge[1])) {
            unionParent(parentArray, edge[0], edge[1]);
            result += edge[2];
            max = edge[2];
        }
    });

    return result - max;
}

const n = 7, m = 12;
const edges = [
    [1,2,3],
    [1,3,2],
    [3,2,1],
    [2,5,2],
    [3,4,4],
    [7,3,6],
    [5,1,5],
    [1,6,2],
    [6,4,1],
    [6,5,3],
    [4,5,3],
    [6,7,4],
];
console.log(solution(n, edges));