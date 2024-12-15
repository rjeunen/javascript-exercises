const reverseString = function(word) {
    reversedWord = "";

    for(let i = 0; i < word.length; i++){
        reversedWord = word.charAt(i) + reversedWord;
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
