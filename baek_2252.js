const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let flag = true;
let graph;
let indegrees;

readline
  .on('line', function (line) {
    if (flag) {
      let [n, _m] = line.split(' ').map((el) => parseInt(el));
      graph = new Array(n + 1).fill().map(() => []);
      indegrees = new Array(n + 1).fill(0);
      flag = false;
    } else {
      let [a, b] = line.split(' ').map((el) => parseInt(el));
      graph[a].push(b);
      indegrees[b] += 1;
    }
  })
  .on('close', function () {
    solution();
    process.exit();
  });

function solution() {
  let result = [];
  let queue = [];
  indegrees.forEach((ind, idx) => {
    if (ind === 0) queue.push(idx);
  });

  while (queue.length) {
    let node = queue.shift();
    result.push(node);
    graph[node].forEach((conn) => {
      indegrees[conn] -= 1;
      if (indegrees[conn] === 0) {
        queue.push(conn);
      }
    });
  }

  result = result.filter((val) => val !== 0);
  console.log(result.join(' '));
}
