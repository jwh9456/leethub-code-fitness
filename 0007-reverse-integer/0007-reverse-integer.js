/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = x.toString().split("").reverse();
    if(arr[arr.length-1] == "-") {
        if(arr[0] == 0) arr.shift();
        arr.unshift("-");
        arr.pop();
    }
    if(arr[0] == 0) arr.shift();
    let answer = arr.join("");
    return (answer > (2**31-1)|| answer < (-2)**31) ? 0 : answer;
};