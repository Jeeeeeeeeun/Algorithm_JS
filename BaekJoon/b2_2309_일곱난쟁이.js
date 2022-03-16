let sample = `20
7
23
19
10
15
25
8
13
`
const input = sample.toString().trim().split('\n').map(v=>parseInt(v)); // \n로 구분된 각 행을 요소로 가지는 배열을 반환
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>parseInt(v)); // \n로 구분된 각 행을 요소로 가지는 배열을 반환
let total = input.reduce((acc, curr) => acc + curr);

let combination = (startIdx, selected) => {
    if(selected.length >= 2) {
        let selectedSum = selected.reduce((acc, curr) => acc + curr);

        if(total - selectedSum === 100) {
            let answer = input.filter((v) => selected.indexOf(v) === -1).sort((a,b)=> a-b).join('\n');
            console.log(answer);
        }
        return;
    }

    for(let i=startIdx; i<9; i++) {
        selected.push(input[i]);
        combination(i+1, selected);
        selected.pop();
    }
    
}

combination(0,[]);