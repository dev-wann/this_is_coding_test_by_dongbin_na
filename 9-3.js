// Chapter 9. 전보
const INF = 987654321;

let n, m, c;
let x, y, z;
let edge;

class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    push(input) {
        this.queue.push(input);
        this.queue.sort((a, b) => {a.dist - b.dist});
    }
    pop() {
        return this.queue.shift();
    }
    size() {
        return this.queue.length;
    }
}

//
n = 3;
m = 2;
c = 1;
edge = new Array(n + 1);
for (let i = 1; i < n + 1; i += 1) edge[i] = [];
edge[1].push({node: 2, dist: 4});
edge[1].push({node: 3, dist: 2});
const result = sendMessage(edge, c);
console.log(`${result.cityNum} ${result.time}`);
//

function sendMessage(edge, c) {
    let distance = new Array(edge.length).fill(INF);
    distance[c] = 0;
    const priQue = new PriorityQueue();
    priQue.push({node: c, dist: 0});

    while(priQue.size()) {
        let {node: cur, dist: curDist} = priQue.pop();
        if (distance[cur] < curDist) continue;
        edge[cur].forEach(nextNode => {
            let {node: next, dist: nextDist} = nextNode;
            let cost = distance[cur] + nextDist;
            if (cost < distance[next]) {
                distance[next] = cost;
                priQue.push({node: nextNode.node, dist: cost});
            }
        });
    }

    let cityNum = 0, time = 0;
    for (let i = 0; i < distance.length; i += 1) {
        if (i !== c && distance[i] !== INF) {
            cityNum += 1;
            time = Math.max(time, distance[i]);
        }
    }

    return {cityNum, time};
}