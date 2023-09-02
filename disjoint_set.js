// // normal
// function find(parent, x) {
//   // 재귀적으로 root 탐색
//   if (parent[x] !== x) {
//     return find(parent, parent[x]);
//   }
//   return x;
// }

// path compression
function find(parent, x) {
  if (parent[x] !== x) {
    parent[x] = find(parent, parent[x]);
  }
  return parent[x];
}

function union(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  // 작은 원소를 부모로 설정
  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

const input = [1, 2, 3, 4, 5, 6];
// 자기 자신을 부모로 삼도록 초기화
const parent = new Array(input.length + 1).fill().map((_val, idx) => idx);

// 연산 실행
union(parent, 1, 4);
union(parent, 2, 3);
union(parent, 2, 4);
union(parent, 5, 6);

console.log(parent);
console.log(find(parent, 3));
console.log(find(parent, 6));
