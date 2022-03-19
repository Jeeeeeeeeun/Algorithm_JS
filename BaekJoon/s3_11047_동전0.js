let sample = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000
`

const input = sample.toString().split('\n'); // \n로 구분된 각 행을 요소로 가지는 배열을 반환
const [N, K] = input[0].toString().trim().split(' ').map(v => parseInt(v)); // N종류의 동전, 가치의 합 K

// 동전
let money = [];
for(let i=0; i<N; i++){
    let currency = parseInt(input[1+i].toString().trim());
    money.push(currency);
}


let curr = K;
let mCount = 0;
for(let i=money.length-1; i>=0; i--){
    if(curr <= 0) break;
    
    if(curr < money[i]) continue;
    
    let ea = Math.floor(curr / money[i]);
    
    mCount += ea;
    curr -= ea * money[i];
}


console.log(mCount);