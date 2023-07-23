// Chapter 10. 팀 결성

function findParent(parentArray, x) {
    if (parentArray[x] != x) {
        parentArray[x] = findParent(parentArray, parentArray[x]);
    }
    return parentArray[x];
}

function unionParent(parentArray, a, b) {
    const parentA = findParent(a);
    const parentB = findParent(b);
    if (parentA < parentB) {
        parentArray[parentB] = a;
    } else {
        parentArray[parentA] = b;
    }
}

const n = 7, m = 8;
const commands = [
    [0,1,3],
    [1,1,7],
    [0,7,6],
    [1,7,1],
    [0,3,7],
    [0,4,2],
    [0,1,1],
    [1,1,1]
];

const parentArr = new Array(n + 1);
for(let i = 0; i < n + 1; i += 1) parentArr[i] = i;

commands.forEach(command => {
    if (command[0]) {
        // 같은 팀 여부 확인
        let isSameTeam = findParent(parentArr, command[1]) === findParent(parentArr, command[2]);
        console.log(isSameTeam ? 'YES' : 'NO');
    } else {
        // 팀 합치기
        unionParent(parentArr, command[1], command[2]);
    }
});