function topologySort(graph) {
  const indegree = new Array(graph.length).fill(0);

  // 진입 차수 정보 채우기
  graph.forEach((edges) => {
    edges.forEach((edge) => {
      indegree[edge] += 1;
    });
  });

  const result = [];
  const queue = [];

  // 진입 차수가 0인 노드를 찾아 큐에 추가
  for (let i = 0; i < indegree.length; i += 1) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  // queue가 빌 때까지 반복
  while (queue.length) {
    let node = queue.shift();
    result.push(node);

    // 연결된 노드의 진입 차수 감소 (=== 연결된 간선 제거)
    let connected = graph[node];
    connected.forEach((conn) => {
      indegree[conn] -= 1;
      // 새롭게 진입 차수가 0이 된 노드를 큐에 추가
      if (indegree[conn] === 0) {
        queue.push(conn);
      }
    });
  }
  return result;
}

const graph = [[1, 2], [3, 4], [4], [5], [5], []];
console.log(topologySort(graph));
// Result: [1, 2, 3, 4, 5, 6]
