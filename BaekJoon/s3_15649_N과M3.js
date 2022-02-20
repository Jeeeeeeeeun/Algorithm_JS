const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); // 공백으로 구분된 각 행을 요소로 가지는 배열을 반환
const input = '4 2'.toString().trim().split(' '); // 공백으로 구분된 각 행을 요소로 가지는 배열을 반환
const [N, M] = input.map(v => parseInt(v)); 
let answer = '';

let permutation = (arr) => {
    if(arr.length === M) {
        answer += arr.join(' ') + "\n";
        return;
    }

    for(let i=1; i<=N; i++) {
        arr.push(i);
        permutation(arr);
        arr.pop();
    }
}

permutation([]);
console.log(answer.trim());