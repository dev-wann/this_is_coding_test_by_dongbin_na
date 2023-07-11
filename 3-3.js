function selectCard(N, M, arr) {
    let numSelected = 0;
    for (let i = 0; i < N; i += 1) {
        arr[i].sort();
        if (numSelected < arr[i][0]) {
            numSelected = arr[i][0];
        }
    }
    return numSelected;
}

const N = 3;
const M = 3;
const arr = [[3, 1, 2], [4, 1, 4], [2, 2, 2]];

console.log(selectCard(N, M, arr));