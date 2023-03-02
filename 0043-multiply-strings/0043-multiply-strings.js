/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let bigNum1 = BigInt(num1), bigNum2 = BigInt(num2);
    let ret = (bigNum1*bigNum2);
    return ret.toString();
};