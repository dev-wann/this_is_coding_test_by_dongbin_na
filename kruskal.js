// n: node의 개수
// edges: 모든 edge의 정보를 담은 배열
function kruskal(n, edges) {
  // 비용에 따라 오름차순으로 정렬
  edges.sort((a, b) => a.cost - b.cost);

  // 서로소 집합을 위한 parent 배열
  let parent = new Array(n).fill().map((_val, idx) => idx);

  let totalCost = 0;
  edges.forEach((edge) => {
    let a = find(parent, edge.from);
    let b = find(parent, edge.to);
    // 서로소가 아닌 경우 신장 트리에 추가
    if (a !== b) {
      union(parent, edge.from, edge.to);
      totalCost += edge.cost;
    }
  });

  return totalCost;
}

function find(parent, x) {
  if (parent[x] !== x) {
    parent[x] = find(parent, parent[x]);
  }
  return parent[x];
}

function union(parent, a, b) {
  let pA = find(parent, a);
  let pB = find(parent, b);
  if (pA < pB) parent[pB] = pA;
  else parent[pA] = pB;
}

const edges = [
  { from: 0, to: 1, cost: 20 },
  { from: 0, to: 2, cost: 18 },
  { from: 0, to: 3, cost: 10 },
  { from: 1, to: 2, cost: 15 },
  { from: 2, to: 3, cost: 25 },
];
console.log(kruskal(4, edges));
