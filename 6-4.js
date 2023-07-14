// Chapter 6. 두 배열의 원소 교체
const n = 5;
const k = 3;
const a = [1, 2, 5, 4, 3];
const b = [5, 5, 6, 6, 5];

a.sort();
b.sort((a, b) => b - a);

for (let i = 0; i < k; i += 1) {
    if (b[i] > a[i]) {
        a[i] = b[i];
    }
}

console.log(a.reduce((acc, cur) => acc + cur));