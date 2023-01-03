/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let wordlength = strs[0].length, delCount=0;
    for(let i = 0; i<wordlength; i++){
        let dp = 'a';
        for(let word of strs){
            if(dp<=word[i]) dp = word[i];
            else {
                delCount++;
                break;
            }
        }
    }
    return delCount;
};