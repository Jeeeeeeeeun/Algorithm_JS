const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); // 공백으로 구분된 각 행을 요소로 가지는 배열을 반환
// const input = '4 4\n1231 1232 1233 1234'.toString().trim().split('\n'); // 공백으로 구분된 각 행을 요소로 가지는 배열을 반환
const [N, M] = input[0].split(' ').map(v => parseInt(v));
const numbers = input[1].trim().split(' ').sort(); 

let isSelected = Array(N+1).fill(false);
let answer = '';

let permutation = (arr) => {
    if(arr.length === M) {
        answer += arr.join(' ') + "\n";
        return;
    }

    for(let i=0; i<N; i++) {
        if(isSelected[i]) continue;

        arr.push(numbers[i]);
        isSelected[i] = true;
        
        permutation(arr);
        arr.pop();
        isSelected[i] = false;

    }
}

permutation([]);
console.log(answer.trim());