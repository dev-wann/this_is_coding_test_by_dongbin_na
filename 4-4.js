let dx = [0, 1, 0, -1];
let dy = [-1, 0, 1, 0];

function play(y, x, dir, map) {
    let nx, ny;
    let visitedCount = 1;
    let backCount = 0;
    map[y][x] = 2;
    
    while(true) {
        dir = (dir + 3) % 4;
        nx = x + dx[dir];
        ny = y + dy[dir];
        if (map[ny][nx] === 0) {
            x =  nx;
            y = ny;
            map[y][x] = 2;
            backCount = 0;
            visitedCount += 1;
        } else {
            backCount += 1;
        }

        if (backCount === 4) {
            x -= dx[dir];
            y -= dy[dir];
            backCount = 0;
            if (map[y][x] === 1) break;
        }
    }
    return visitedCount;
}

const y = 1;
const x = 1;
const dir = 0;
const map = [[1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 1, 1]];
console.log(play(y, x, dir, map));