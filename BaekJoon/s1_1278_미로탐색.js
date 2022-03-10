let sample = `4 6
101111
101010
101011
111011
`
const input = sample.toString().split('\n'); // \n로 구분된 각 행을 요소로 가지는 배열을 반환

// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n'); // \n로 구분된 각 행을 요소로 가지는 배열을 반환
const [N, M] = input[0].trim().split(' ').map(v => parseInt(v)); // N:행 M:열


// 그래프 생성
let graph = Array(N).fill();
for(let i=0; i<N; i++) {
    graph[i] = input[i+1].split('');
}

let visited = Array(N).fill().map(v => Array(M).fill(false));

let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];
let min = Number.MAX_SAFE_INTEGER;

// DFS
let dfs = (currX, currY, count) => {
    // 종료
    if(currX==N-1 && currY==M-1) {
        if(min>count) {
            min = count;
            return;
        }
    }

    for(let i=0; i<4; i++) {
        let nx = currX + dx[i];
        let ny = currY + dy[i];

        // 영역외
        if(nx<0 || ny<0 || nx>=N || ny>=M) continue;

        // 영역 안
        if(graph[nx][ny]==='1' && !visited[nx][ny]) {
            visited[nx][ny] = true;
            dfs(nx, ny, count+1);
            visited[nx][ny] = false;
        }
    }

}
dfs(0,0,1);
console.log(min);



// bfs
visited = Array(N).fill().map(v => Array(M).fill(false));

let queue = [];
queue.push([0,0, 1]);
visited[0][0] = true;

while(queue.length) {
    let [currX, currY, count] = queue.shift();

    if(currX===N-1 && currY===M-1) {
        console.log(count);
        break;
    }
    
    for(let i=0; i<4; i++) {
        let nx = currX + dx[i];
        let ny = currY + dy[i];

        // 영역외
        if(nx<0 || ny<0 || nx>=N || ny>=M) continue;

        // 영역 안
        if(graph[nx][ny]==='1' && !visited[nx][ny]) {
            queue.push([nx, ny, count+1]);
            visited[nx][ny] = true;
        }
    }
}