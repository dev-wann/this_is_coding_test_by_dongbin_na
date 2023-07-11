const step = [{row: 2, col: 1}, {row: -2, col: 1}, {row: 2, col: -1}, {row: -2, col: -1}, {row: 1, col: 2}, {row: -1, col: 2}, {row: 1, col: -2}, {row: -1, col: -2}];

function moveCandidate(pos) {
    const posData = pos.split("");
    const col = posData[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const row = Number(posData[1]);

    let count = 0;
    let nrow, ncol;
    for (let i = 0; i < step.length; i += 1) {
        nrow = row + step[i].row;
        ncol = col + step[i].col;
        if (nrow > 0 && ncol > 0 && nrow < 9 && ncol < 9) {
            count += 1;
        }
    }

    return count;
}

const pos = "c2";
console.log(moveCandidate(pos));