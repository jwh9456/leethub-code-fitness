/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let retArr = ['1'];
    while (retArr.length < n){
        let tmpArr = retArr[retArr.length-1].split(''), tmpStr="", count=1;
        for(let idx=0; idx<tmpArr.length; idx++){
            if(tmpArr[idx] != tmpArr[idx+1]){
                tmpStr += count+tmpArr[idx]
                count=1;
            }
            else count++
        }
        retArr.push(tmpStr)
    }
    return retArr[retArr.length-1];
};