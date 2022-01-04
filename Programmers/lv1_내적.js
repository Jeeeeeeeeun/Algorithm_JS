function solution(a, b) {
    let c = a.map((v,i) => {
        return v * b[i]
    })
    
    return c.reduce((acc, v, i) => {
        return acc+v;
    })
}

function solution2(a, b) {
    return a.reduce((acc, v, i) => {
        return acc + (v*b[i]);
    }, 0)
}