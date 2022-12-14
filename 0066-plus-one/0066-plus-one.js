/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var num = BigInt(digits.join(""))+1n;
    return num.toString().split("");  
};