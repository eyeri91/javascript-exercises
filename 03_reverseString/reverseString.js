
/*
const reverseString = function(word) {
    let charArray = [];
    for (let char of word){
        charArray.unshift(char);
    }
    let reverseWord = '';
    for (let char of charArray){
        reverseWord += char;
    }
    return reverseWord;
};
*/

const reverseString = function(word) {
    return word.split('').reverse().join('');
}

// Do not edit below this line
module.exports = reverseString;
