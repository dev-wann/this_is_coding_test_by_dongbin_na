function permutation(arr, n) {
  // 종료 조건.
  if (n === 1) {
    return arr.map((val) => [val]);
  }

  let result = [];
  // fixed: 먼저 하나 고른 수
  arr.forEach((fixed, idx, origin) => {
    // fixed를 제외한 나머지에 대해 n - 1개 고르기
    let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    let perms = permutation(rest, n - 1);
    // n - 1개 집합에 fixed 추가해 n개짜리 배열 완성
    perms.forEach((perm) => {
      result.push([fixed, ...perm]);
    });
  });
  return result;
}

function combination(arr, n) {
  if (n === 1) {
    return arr.map((val) => [val]);
  }

  let result = [];
  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    let combs = combination(rest, n - 1);
    combs.forEach((comb) => {
      result.push([fixed, ...comb]);
    });
  });
  return result;
}

let arr = [1, 2, 3, 4, 5];

let perm = permutation(arr, 3);
console.log(perm);
console.log(`nPr = ${perm.length}`);

let comb = combination(arr, 3);
console.log(comb);
console.log(`nCr = ${comb.length}`);
