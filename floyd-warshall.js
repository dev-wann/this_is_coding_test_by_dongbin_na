function floydWarshall(graph) {
    const length = graph.length;
    for (let k = 0; k < length; k += 1) {
        for (let i = 0; i < length; i += 1) {
            for (let j = 0; j < length; j += 1) {
                let cost = graph[i][k] + graph[k][j];
                if (cost < graph[i][j]) {
                    graph[i][j] = cost;
                }
            }
        }
    }
    return graph;
}

const INF = Number.MAX_SAFE_INTEGER;
const graph = [
    [0, 2, 1, 8],
    [3, 0, INF, INF],
    [INF, 5, 0, 4],
    [INF, 3, 3, 0]
];
console.log(floydWarshall(graph));