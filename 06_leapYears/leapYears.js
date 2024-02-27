const leapYears = function(year) {
    let answer = true;

    if(year % 400 == 0){
        answer = true;
    } else if(year % 100 == 0) {
        answer = false;
    } else if(year % 4 == 0){
        answer = true;
    } else{
        answer = false;
    }
    return answer;
};

//check solution for better code.

// Do not edit below this line
module.exports = leapYears;
