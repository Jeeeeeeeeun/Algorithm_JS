
function solution(absolutes, signs) {
    var answer = 0;
    
    absolutes.forEach((item, i)=> {
        if(signs[i]) {
            answer += item;
        }else {
            answer -= item;
        }
    })
    
    
    return answer;
}