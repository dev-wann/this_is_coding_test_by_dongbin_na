function move(n, arr) {
    const position = { row: 1, col: 1 };
    for (let i = 0; i < arr.length; i +=1) {
        switch(arr[i]) {
            case 'L':
                if (position.col > 1) position.col -= 1;
                break;
            case 'R':
                if (position.col < n) position.col += 1;
                break;
            case 'U':
                if (position.row > 1) position.row -= 1;
                break;
            case 'D':
                if (position.row < n) position.row += 1;
                break;
            default:
                break;
        }
    }
    console.log(`${position.row} ${position.col}`);
}

const n = 5;
const arr = ['R', 'R', 'R', 'U', 'D', 'D'];
move(n, arr);