function solution(array, commands) {
    var answer = [];
    
    commands.forEach((command,i) => {
        let c = array.slice(command[0]-1, command[1]).sort((a,b) => a-b);
        answer.push(c[command[2]-1]);
    })
    
    
    return answer;
}

function solution2(array, commands) {
    return commands.map((command,i) => {
        let c = array.slice(command[0]-1, command[1]).sort((a,b) => a-b);
        return c[command[2]-1];
    })
}