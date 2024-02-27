const reverseString = function(word) {
    let splitString = word.split("");
    let reverseWord = splitString.reverse();
    let newWord = reverseWord.join("");

    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
