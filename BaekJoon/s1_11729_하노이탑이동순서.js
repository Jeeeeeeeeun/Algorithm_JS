const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().split(' '); // \n로 구분된 각 행을 요소로 가지는 배열을 반환
const input = '3'.toString().split(' '); // \n로 구분된 각 행을 요소로 가지는 배열을 반환
const N = parseInt(input[0]); // 장대에 쌓인 원판 개수

let K = 0;
let answer = [];

let hanoi = (cnt, from, tmp, to) => {
    if(cnt==0) return;

    //n-1개 원판을 tmp로 이동
    hanoi(cnt-1, from, to, tmp);

    // 맨 아래의 원반을 to로
    K++;
    answer.push([from, to]);

    // n-1개 원판을 다시 to로
    hanoi(cnt-1, tmp, from, to);
}

hanoi(N, 1, 2, 3);
console.log(K);
console.log(answer.map((elem)=> elem.join(" ")).join("\n"));