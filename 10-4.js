// Chapter 10. 커리큘럼

function solution(classes) {
    const queue = [];
    const adjList = new Array(classes.length);
    for (let i = 0; i < classes.length; i += 1) adjList[i] = [];

    // 데이터 initialize
    for(let i = 1; i < classes.length; i += 1) {
        queue.push({class: i, hour: classes[i][0], indegree: classes[i].length - 2});
        for (let j = 1; j < classes[i].length - 1; j += 1) {
            adjList[i].push(classes[i][j]);
        }
    }
    queue.sort((a, b) => a.indegree - b.indegree);

    const minHours = new Array(classes.length).fill(0);
    let curIndegree = 0;
    while(queue.length) {
        if (curIndegree !== queue[0].indegree) {
            curIndegree = queue[0].indegree;
        } else {
            let now = queue.shift();
            let prevHour = 0;
            adjList[now.class].forEach(prevClass => {
                prevHour = Math.max(prevHour, minHours[prevClass]);
            });
            minHours[now.class] = prevHour + now.hour;
        }
    }

    return minHours;
}

const n = 5;
const classes = [
    [],
    [10,-1],
    [10,1,-1],
    [4,1,-1],
    [4,3,1,-1],
    [3,3,-1],
];

console.log(solution(classes));