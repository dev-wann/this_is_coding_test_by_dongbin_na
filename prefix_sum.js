// 1차원 배열
(function () {
  // 원본 값
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(`Original: [${arr}]`);

  // 누적 합 배열 생성
  let prefixSum = new Array(arr.length);
  prefixSum[0] = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    prefixSum[i] = arr[i] + (i > 0 ? prefixSum[i - 1] : 0);
  }
  console.log(`PrefixSum: [${prefixSum}]`);

  // a ~ b 까지 누적 합 계산
  let a = 3;
  let b = 6;
  let result = prefixSum[b] - prefixSum[a - 1];
  console.log(`Sum ${a} ~ ${b}: ${result}`);
})();

// 2차원 배열
(function () {
  // 원본 값
  let arr = [
    [0, 1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8],
  ];
  console.log('Original:');
  console.log(arr);

  // 누적 합 배열 생성
  let prefixSum = new Array(arr.length)
    .fill()
    .map(() => new Array(arr[0].length).fill());
  for (let r = 0; r < arr.length; r += 1) {
    for (let c = 0; c < arr[0].length; c += 1) {
      prefixSum[r][c] =
        arr[r][c] +
        (r > 0 ? prefixSum[r - 1][c] : 0) +
        (c > 0 ? prefixSum[r][c - 1] : 0) -
        (r > 0 && c > 0 ? prefixSum[r - 1][c - 1] : 0);
    }
  }
  console.log('PrefixSum:');
  console.log(prefixSum);

  // (r1, c1) ~ (r2, c2) 까지 누적 합 계산
  let r1 = 2;
  let c1 = 2;
  let r2 = 3;
  let c2 = 3;
  let result =
    prefixSum[r2][c2] -
    prefixSum[r1 - 1][c2] -
    prefixSum[r2][c1 - 1] +
    prefixSum[r1 - 1][c1 - 1];
  console.log(`Sum (${r1}, ${c1}) ~ (${r2}, ${c2}): ${result}`);
})();
