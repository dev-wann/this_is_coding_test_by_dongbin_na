const INF = Number.MAX_SAFE_INTEGER;

class PriorityQueue {
    constructor() { this.queue = []; }
    push(input) {
        this.queue.push(input);
        this.queue.sort((a, b) => a.dist - b.dist);
    }
    pop() { return this.queue.shift(); }
    size() { return this.queue.length; }
}

function dijkstra(adjList, start) {
	const priQue = new PriorityQueue();
    const distance = new Array(adjList.length).fill(INF);
    
    // 첫 번째 노드 처리
   	priQue.push({ to: start, dist: 0 });
    distance[start] = 0;
    
    // 반복
    while(priQue.size()) {
    	let { to: curNode, dist: curDist } = priQue.pop();
        if (curDist > distance[curNode]) continue; // 반복 5 케이스
        adjList[curNode].forEach(next => {
        	let [nextNode, nextDist] = next;
            let cost = curDist + nextDist;
            if (cost < distance[nextNode]) {
            	distance[nextNode] = cost;
                priQue.push({to: nextNode, dist: cost});
            }
        });
    }
    
    return distance;
}

const n = 5; // 노드 개수
const adjList = new Array(n + 1); // 주어진 노드 번호를 그대로 사용하기 위해 index 0는 무시
adjList[0] = [];
adjList[1] = [[2, 2], [4, 1], [5, 4]];
adjList[2] = [[5, 1]];
adjList[3] = [];
adjList[4] = [[2, 3], [3, 5], [5, 2]];
adjList[5] = [];

const result = dijkstra(adjList, 1);
console.log(result.slice(1));