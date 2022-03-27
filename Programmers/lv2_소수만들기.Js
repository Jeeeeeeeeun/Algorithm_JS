
function solution(nums) {
    var cnt = 0;
    
    function combination(start, selected) {
        if(selected.length ===3) {
            let sum = selected.reduce((acc, n) => acc + n);
            if(isPrime(sum)) {  
                cnt++;
            }
            return;
        }

        for(let i=start; i<nums.length; i++) {
            selected.push(nums[i]);

            combination(i+1, selected);

            selected.pop();
        }
    }

    combination(0, []);
    
    return cnt;
    
}


function isPrime(num) {
    if (num<=2) return true;
    
    for(let i=2; i<=num/2; i++) {
        if(num%i===0) return false;
    }
    
    return true;
}