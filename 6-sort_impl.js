// create sample data
const data = Array(10000).fill().map((_value, index) => index + 1);
for (let i = 0; i < 100; i += 1) data.sort(() => Math.random() - 0.5);

// check whether correctly sorted
function checkResult(result) {
  for (let i = 0; i < result.length - 1; i += 1) {
    if (result[i] > result[i + 1]) {
      console.error(`SORTING ERROR AT INDEX ${i}`);
      return false;
    }
  }
  return true;
}

function swap(array, leftIndex, rightIndex) {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

let data_clone;

// selection sort
function selectionSort(array) {
  let min_index;
  for (let i = 0; i < array.length; i += 1) {
    min_index = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }
    if (i !== min_index) {
      swap(array, i, min_index);
    }
  }
  return array;
}
data_clone = [...data];
console.time('Selection Sort')
selectionSort(data_clone);
console.timeEnd('Selection Sort')
checkResult(data_clone);

// insertion sort
function insertionSort(array) {
  let currentValue, i, j;
  for (i = 1; i < array.length; i += 1) {
    currentValue = array[i];
    for (j = i - 1; j >= 0; j -= 1) {
      if (array[j] <= currentValue) break;
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
}
data_clone = [...data];
console.time('Insertion Sort')
insertionSort(data_clone);
console.timeEnd('Insertion Sort')
checkResult(data_clone);

// quick sort
function quickSort(array, start, end) {
  if (start >= end) return; // 종료 조건

  let pivot = array[start];
  let left = start + 1;
  let right = end;

  // left right가 엇갈릴 때까지 swap 반복
  while (left <= right) {
    while(array[left] < pivot && left <= end) {
      left += 1;
    }
    while(array[right] > pivot && right > start) {
      right -= 1;
    }
    if (left < right) {
      // 엇갈리지 않은 경우
      swap(array, left, right);
    } else {
      // 엇갈린 경우
      swap(array, start ,right);
    }
  }

  // 각 sub array에 대해 재귀 함수 호출
  quickSort(array, start, right - 1);
  quickSort(array, right + 1, end);
}
data_clone = [...data];
console.time('Quick Sort');
quickSort(data_clone, 0, data_clone.length - 1);
console.timeEnd('Quick Sort');
checkResult(data_clone);

// merge sort
function mergeSort(array) {
  if (array.length === 1) return array; // 종료 조건

  // divide
  const middleIndex = Math.floor(array.length/2);
  const left = mergeSort(array.slice(0, middleIndex));
  const right = mergeSort(array.slice(middleIndex, array.length));
  
  // merge
  const result = [];
  while (left.length !== 0 && right.length !== 0) {
    if (left[0] <= right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return [...result, ...left, ...right];
}
data_clone = [...data];
console.time('Merge Sort')
const result_ms = mergeSort(data_clone);
console.timeEnd('Merge Sort')
checkResult(result_ms);

// counting sort
function countSort(input) {
  const min = Math.min(...input);
  const max = Math.max(...input);

  // input array의 value를 key로 하는 count array 작성
  const count = new Array(max - min + 1).fill(0);
  for (let i = 0; i < input.length; i += 1) {
    count[input[i] - min] += 1;
  }

  // count array를 result로 변환
  let idx = 0;
  const result = new Array(input.length);
  for (let i = 0; i < count.length; i += 1) {
    for (let j = 0; j < count[i]; j += 1) {
      result[idx] = i + min;
      idx += 1;
    }
  }
  return result;
}
data_clone = [...data];
console.time('Counting Sort')
const result_cs = countSort(data_clone);
console.timeEnd('Counting Sort')
checkResult(result_cs);