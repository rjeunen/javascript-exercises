const repeatString = function(word, times) {
    solution = "";
    if(times < 0){
        return "ERROR";
    }
    
    for(i = 0; i < times; i++){
        solution += word;
    }
    return solution;
};

// Do not edit below this line
module.exports = repeatString;
