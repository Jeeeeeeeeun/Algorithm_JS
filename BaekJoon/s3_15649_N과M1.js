const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split(' '); // 공백으로 구분된 각 행을 요소로 가지는 배열을 반환
// const input = '4 2'.toString().split(' '); // 공백으로 구분된 각 행을 요소로 가지는 배열을 반환
const [N, M] = input.map(v => parseInt(v)); // N

let isUsed = Array(N).fill(false);
let answer = ''

let permutation = (arr) => {
    // 종료조건
    if(arr.length === M) {
        answer += arr.join(' ') + "\n";
        return;
    }

    for(let i=0; i<N; i++) {
        if(isUsed[i]) continue;

        // 선택
        arr.push(i+1);
        isUsed[i] = true;

        permutation(arr); // 다음 선택
        arr.pop()
        isUsed[i] = false; // 되돌리기
    }
}

permutation([]);
console.log(answer.trim());
