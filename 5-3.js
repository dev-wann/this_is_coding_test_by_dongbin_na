// Chapter 5. 음료수 얼려 먹기

// map value meaning
//   0: vacant
//   1: blocked
//   2: visited

const drow = [0, -1, 0, 1];
const dcol = [1, 0, -1, 0];

const isInValidRange = (row, col, row_max, col_max) => {
    if (row < 0) return false;
    if (col < 0) return false;
    if (row >= row_max) return false;
    if (col >= col_max) return false;
    return true;
}

function dfs(row, col, row_max, col_max, map) {
    map[row][col] = 2;
    let nrow, ncol;
    for (let i = 0; i < 4; i += 1) {
        nrow = row + drow[i];
        ncol = col + dcol[i];
        if (isInValidRange(nrow, ncol, row_max, col_max) && map[nrow][ncol] === 0) {
            dfs(nrow, ncol, row_max, col_max, map);
        }
    }
}

function makeIcecream(row_max, col_max, map) {
    let count = 0;
    for (let row = 0; row < row_max; row += 1) {
        for (let col = 0; col < col_max; col += 1) {
            if (map[row][col] === 0) {
                dfs(row, col, row_max, col_max, map);
                count += 1;
            }
        } 
    }
    return count;
}

// const n = 4;
// const m = 5;
// const map = [
//     [0, 0, 1, 1, 0],
//     [0, 0, 0, 1, 1],
//     [1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0]
// ];
const n = 15;
const m = 14;
const map = [
    [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
    [1,1,1,1,1,1,0,1,1,1,1,1,1,0],
    [1,1,0,1,1,1,0,1,1,0,1,1,1,0],
    [1,1,0,1,1,1,0,1,1,0,0,0,0,0],
    [1,1,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,0,0,0,0,0,0,0,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,1,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,0,0,1,1],
    [1,1,1,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,0,0,0,1,1,1,1,1,1,1,1]
];
console.log(makeIcecream(n, m, map));