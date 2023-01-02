/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let capital = 0;
    let small = 0;
    for (let i in word){
        if('a'<=word[i] && word[i]<='z') small++
        else capital++
    }
    if(capital == word.length || small == word.length){
        return true
    }
    else if (small == word.length-1 && ('A'<=word[0]&&word[0]<='Z')) return true
    else return false
};