// Chapter 5. 미로 탈출

// map value meaning
//   0: blocked
//   1: empty
//   2: visited

const drow = [0, -1, 0, 1];
const dcol = [1, 0, -1, 0];

function isInValidRange(pos, row_max, col_max) {
    if (pos.row < 0) return false;
    if (pos.row >= row_max) return false;
    if (pos.col < 0) return false;
    if (pos.col >= col_max) return false;
    return true;
}

function escapeMaze(map, row_max, col_max) {
    const queue = [{row: 0, col: 0, move_count: 1}];
    map[0][0] = 2;

    // bfs
    let pos, npos;
    while(queue.length !== 0) {
        pos = queue.shift();
        if (pos.row === row_max - 1 && pos.col === col_max - 1) {
            return pos.move_count;
        }
        for (let i = 0; i < 4; i += 1) {
            npos = {row: pos.row + drow[i], col: pos.col + dcol[i], move_count: pos.move_count + 1};
            if (isInValidRange(npos, row_max, col_max) && map[npos.row][npos.col] === 1) {
                map[npos.row][npos.col] = 2;
                queue.push(npos);
            }
        }
    }
    return -1; // NOT FOUND
};

const n = 5;
const m = 6;
const map = [
    [1,0,1,0,1,0],
    [1,1,1,1,1,1],
    [0,0,0,0,0,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1]
];
console.log(escapeMaze(map, n, m));