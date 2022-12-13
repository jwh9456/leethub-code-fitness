/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var output = '';
    var ret = '';
    var arr = strs[0].split("")
    while (true){
        for(var i in strs){
            if(strs[i].startsWith(output)) continue;
            else return ret;
        }
        ret = output
        output += arr.shift()
    }
};