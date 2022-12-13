/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var arr1 = x.toString().split("")
    var tmp = x.toString().split("")
    var arr2 = tmp.reverse()
    if(arr1.toString() == arr2.toString()) return true
    else return false
};