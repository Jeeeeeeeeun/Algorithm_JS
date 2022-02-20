const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().split(' '); // \n로 구분된 각 행을 요소로 가지는 배열을 반환
const input = '3'.toString().split(' '); // \n로 구분된 각 행을 요소로 가지는 배열을 반환
const N = parseInt(input[0]);

let numbers = [];
let isSelected = [];
for(let i=0; i<N; i++) {
    isSelected.push(false);
}

let perm = (cnt) => {
    if(cnt==N) {

    }

    for(let i=0; i<N; i++) {
        if(isSelected[i]) continue;
        
        numbers.push()
    }


}