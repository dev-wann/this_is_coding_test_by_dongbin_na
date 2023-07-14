// Chapter 6. 성적이 낮은 순서로 학생 출력하기
const data = [{name:'홍길동', score:95}, {name:'이순신', score:77}];
data.sort((a, b) => a.score - b.score);
let resultStr = data[0].name;
for (let i = 1; i < data.length; i += 1) {
    resultStr += ` ${data[i].name}`
}
console.log(resultStr);