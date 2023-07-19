// Chpater 9. 미래 도시
const INF = 987654321;

function floydWarshall(graph) {
    let length = graph.length;
    for (let k = 0; k < length; k += 1) {
        for (let i = 0; i < length; i += 1) {
            for (let j = 0; j < length; j += 1) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout1
});
let n, m, graph, x, k;
let edgeCount = 0;
rl.on('line', line => {
    if (n === undefined && m === undefined) {
        [n, m] = line.split(" ");
        n = Number(n);
        m = Number(m);
        graph = new Array(n);
        for (let i = 0; i < n; i += 1) graph[i] = new Array(n).fill(INF);
        for (let i = 0; i < n; i += 1) graph[i][i] = 0;
    } else if (edgeCount < m) {
        let edgeInfo = line.split(" ");
        graph[edgeInfo[0]-1][edgeInfo[1]-1] = 1;
        graph[edgeInfo[1]-1][edgeInfo[0]-1] = 1;
        edgeCount += 1;
    } else {
        [x, k] = line.split(" ");
        x = Number(x);
        k = Number(k);
        rl.close();
    }
}).on('close', () => {
    floydWarshall(graph);
    let d1 = graph[0][k-1]
    let d2 = graph[k-1][x-1];
    if (d1 === INF || d2 === INF) console.log(-1);
    else console.log(d1 + d2);
    process.exit();
});

// let n = 5, m = 7;
// let x = 4, k = 5;
// let graph = new Array(n);
// for (let i = 0; i < n; i += 1) graph[i] = new Array(n).fill(INF);
// for (let i = 0; i < n; i += 1) graph[i][i] = 0;
// graph[0][1] = 1;
// graph[0][2] = 1;
// graph[0][3] = 1;
// graph[1][3] = 1;
// graph[2][3] = 1;
// graph[2][4] = 1;
// graph[3][4] = 1;

// graph[1][0] = 1;
// graph[2][0] = 1;
// graph[3][0] = 1;
// graph[3][1] = 1;
// graph[3][2] = 1;
// graph[4][2] = 1;
// graph[4][3] = 1;

// floydWarshall(graph);
// let d1 = graph[0][k-1];
// let d2 = graph[k-1][x-1];
// if (d1 === INF || d2 === INF) console.log(-1);
// else console.log(d1 + d2);