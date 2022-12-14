/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(" ")
    var i = 1
    while (true){
        if(arr[arr.length-i] != "") return arr[arr.length-i].length
        else i++
    }
};