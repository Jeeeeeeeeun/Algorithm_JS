let sample = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000
`
const input = sample.toString().split('\n'); // \n로 구분된 각 행을 요소로 가지는 배열을 반환

// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n'); // \n로 구분된 각 행을 요소로 가지는 배열을 반환
const [N] = input[0].trim().split(' ').map(v => parseInt(v)); // N (지도 한변 길이)

// 그래프
let graph = Array(N+1).fill().map((v, i) => {
    return input[i+1].split('').map(v => parseInt(v));
})


// BFS
let bfs = (startX, startY) => {
    let queue = [];
    let dx = [1,0,-1,0];
    let dy = [0,1,0,-1];

    // 시작점 방문
    queue.push([startX, startY, 1]);
    graph[startX][startY]++;
    let cnt = 1;

    while(queue.length) {
        let curr = queue.shift();

        for(let i=0; i<4; i++) {
            let nx = curr[0] + dx[i];
            let ny = curr[1] + dy[i];

            if(nx<0 || ny<0 || nx>=N || ny>=N) continue;

            // 범위안
            if(graph[nx][ny] === 1){
                queue.push([nx, ny, curr[2]+1]);
                graph[nx][ny]++;
                cnt++;
            }
        }
    }

    return cnt;

}

let town = 0;
let houses = [];
for(let i=0; i<N; i++) {
    for(let j=0; j<N; j++) {
        if(graph[i][j]===1) {
            town++;
            houses.push(bfs(i, j));
        }
    }
}

console.log(town);
console.log( houses.sort((a,b) => a-b).join('\n'));
