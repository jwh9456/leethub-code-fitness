/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let answer = [];
    let arr = title.toLowerCase().split(" ");
    for(let word of arr){
        word.length < 3? answer.push(word) : 
        answer.push(word[0].toUpperCase()+word.slice(1,word.length))
    }
    return answer.join(" ");
};