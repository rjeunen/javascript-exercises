const palindromes = function (palindrome) {
    palindrome = palindrome.toLowerCase();
    palindrome = palindrome.replaceAll(" ", "");
    palindrome = palindrome.replaceAll(",", "");
    palindrome = palindrome.replaceAll(".", "");
    palindrome = palindrome.replaceAll("!", "");
    let reversedPalindrome = palindrome.split("").reverse().join("");
    reversedPalindrome = reversedPalindrome.toLowerCase();
    reversedPalindrome = reversedPalindrome.replaceAll(" ", "");
    reversedPalindrome = reversedPalindrome.replaceAll(",", "");
    reversedPalindrome = reversedPalindrome.replaceAll(".", "");
    reversedPalindrome = reversedPalindrome.replaceAll("!", "");
    if(reversedPalindrome === palindrome){
        return true;
    } else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;

