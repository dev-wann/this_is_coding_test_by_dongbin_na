function countIncludeThree(n) {
    let count = 0;

    for (let h = 0; h <= n; h += 1) {
        for (let m = 0; m < 60; m += 1) {
            for (let s = 0; s < 60; s += 1) {
                if ((String(h) + String(m) + String(s)).includes('3')) {
                    count += 1;
                }
            }
        }
    }

    return count;
}

let n = 5;
console.log(countIncludeThree(n));