function untilOne(N, K) {
    let count = 0;
    while(N >= K) {
        if (N % K === 0) {
            count += 1;
            N /= K;
        } else {
            count += N % K;
            N -= N % K;
        }
    }
    count += N - 1;
    return count;
}

const N = 25;
const K = 5;
console.log(untilOne(N, K))