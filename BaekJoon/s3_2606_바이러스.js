let sample = `7
6
1 2
2 3
1 5
5 2
5 6
4 7
`
const input = sample.toString().split('\n'); // \n로 구분된 각 행을 요소로 가지는 배열을 반환

// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n'); // \n로 구분된 각 행을 요소로 가지는 배열을 반환
const N = parseInt(input[0]); // N:컴퓨터의 수
const M = parseInt(input[1]); // M:직접연결되어 있는 컴퓨터 쌍의 수

let graph = Array(N+1).fill().map(v=>[]);
for(let i=0; i<M; i++) {
    let [start, end] = input[i+2].trim().split(' ').map(v => parseInt(v));
    
    graph[start].push(end);
    graph[end].push(start);
}

//DFS (STACK)
let stack = [];
let visited = Array(N+1).fill(false);

stack.push(1);
visited[1] = true;
let count = 0;
while(stack.length) {
    let curr = stack.pop();

    for(let v of graph[curr]) {
        if(!visited[v]) {
            stack.push(v);
            visited[v] = true;
            count++;

        }
    }
}

console.log(count)
