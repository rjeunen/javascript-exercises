const sumAll = function(numberOne, numberTwo) {
    let sum = 0;

    if(numberOne > numberTwo){
        for(let i = numberTwo; i < numberOne + 1; i++){
            sum = sum + i;
        } 
    } else if(numberOne < 0 || numberTwo < 0){
        sum = "ERROR";
    } else if (typeof numberOne !== 'number' || typeof numberTwo !== 'number'){
        sum = "ERROR";
    } else {
        for(let i = numberOne; i < numberTwo + 1; i++){
            sum = sum + i;
        } 
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;


