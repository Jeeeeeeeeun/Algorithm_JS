function solution(numbers) {  
    let result = numbers.reduce((acc, curr, i)=>{
        return acc + curr
    })
    
    return 45-result;
}