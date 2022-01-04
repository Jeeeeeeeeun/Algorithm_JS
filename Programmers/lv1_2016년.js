function solution(a, b) {
    let days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    let month = {1:31, 2:29, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31};
    
    let day = 0;
    for(let i=1; i<a; i++) {
        day += month[i];
    }
    day += b;
    
    return days[day%7]   
}