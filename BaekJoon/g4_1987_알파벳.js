let sample = `5 5
IEFCJ
FHFKC
FFALF
HFGCF
HMCHH
`
const input = sample.toString().split('\n'); // \n로 구분된 각 행을 요소로 가지는 배열을 반환
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n'); // \n로 구분된 각 행을 요소로 가지는 배열을 반환

const [R, C] = input[0].toString().trim().split(' ').map(v => parseInt(v)); // R : 세로, C : 가로

// 지도
let map = [];
let visited = Array(R).fill().map(v => Array(C).fill(false));
for(let i=0; i<R; i++) {
    let r = input[i+1].toString().trim().split('');
    map.push(r);
}


// dfs
let dx = [-1,0,1,0];
let dy = [0,-1,0,1];
let dfs = (currX, currY, count) => {
    let isEnd = true;
    // 사방탐색
    for(let i=0; i<4; i++) {
        let nx = currX + dx[i];
        let ny = currY + dy[i];

        if(nx<0 || ny<0 || nx>=R || ny>=C) continue;
        let na = map[nx][ny];

        // 갈 수 있으면 
        if(visitedAlphabet.indexOf(na) === -1 && !visited[nx][ny]) {
            isEnd = false;

            visitedAlphabet.push(na);
            visited[nx][ny] = true;
            dfs(nx, ny, count+1);
            visitedAlphabet.pop();
            visited[nx][ny] = false;
        }
    }

    if(isEnd) {
        if(max<count) {
            max=count;
        }
        return;
    }
}


// 0,0 방문
let visitedAlphabet = [];
visitedAlphabet.push(map[0][0])
visited[0][0] = true;

let max = Number.MIN_SAFE_INTEGER;
dfs(0,0,1);
console.log(max);
