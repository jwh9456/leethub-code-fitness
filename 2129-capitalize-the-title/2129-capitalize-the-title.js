/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let answer = [];
    title = title.toLowerCase()
    let arr = title.split(" ");
    for(let word of arr){
        if(word.length < 3) answer.push(word);
        else( answer.push(word[0].toUpperCase()+word.slice(1,word.length)));
    }
    return answer.join(" ");
};