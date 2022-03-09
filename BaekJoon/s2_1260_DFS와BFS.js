let sample = `5 5 3
5 4
5 2
1 2
3 4
3 1
`
const input = sample.toString().split('\n'); // \n로 구분된 각 행을 요소로 가지는 배열을 반환

// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n'); // \n로 구분된 각 행을 요소로 가지는 배열을 반환
const [N, M, V] = input[0].trim().split(' ').map(v => parseInt(v)); // 정점개수 / 간선개수 / 탐색시작정점


// 그래프 생성
let graph = Array(N+1).fill().map(v => []);
for(let i=1; i<input.length - 1; i++) {
    const [start, end] = input[i].trim().split(' ').map(v => parseInt(v));
    
    graph[start].push(end);
    graph[end].push(start);
}
// 그래프 정렬
for(let edge of graph) {
    edge.sort((a,b) => a-b);
}

//DFS (Recursive)
let dfsRecurVisited = Array(N+1).fill(false);
let dfsRecurAnswer = [];

let dfsRecursive = (curr) => {
    // 현재 정점 방문
    dfsRecurVisited[curr] = true;
    dfsRecurAnswer.push(curr);
    
    // 다음 정점
    for(let vertex of graph[curr]) {
        if(!dfsRecurVisited[vertex]) { // 방문X 정점이면
            dfsRecursive(vertex);
        }
    }
}
dfsRecursive(V);
console.log(dfsRecurAnswer.join(' '));




// DFS (STACK)
let dfsStackVisited = Array(N + 1).fill(false);
let stack = [];
let dfsStackAnswer = [];

stack.push(V);
while(stack.length) {
    let curr = stack.pop(); // stack 앞에서 꺼내기
    
    if(!dfsStackVisited[curr]) {
        dfsStackVisited[curr] = true;
        dfsStackAnswer.push(curr);

        for(let i=graph[curr].length-1;  i>=0; i--) { // 역순으로 넣어줌
            let vertex = graph[curr][i];
            if(!dfsStackVisited[vertex]) {
                stack.push(vertex);
            }
        }
    }
}
console.log(dfsStackAnswer.join(' '));






// BFS (QUEUE)
for(let edge of graph) {
    edge.sort((a,b) => a-b);
}
let bfsVisited = Array(N + 1).fill(false);
let queue = [];
let bfsAnswer = [];

queue.push(V);
while(queue.length) {
    let curr = queue.shift(); // 앞에서 꺼내기
    
    if(!bfsVisited[curr]) {
        // 방문
        bfsVisited[curr] = true;
        bfsAnswer.push(curr);
        
        for(let v of graph[curr]) {
            if(!bfsVisited[v]) {
                queue.push(v);
            }
        }
    }
}
console.log(bfsAnswer.join(' '));



