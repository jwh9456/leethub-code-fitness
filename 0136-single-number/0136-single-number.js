/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let _nums = nums.sort()
    while(_nums.length != 0){
        let num = _nums.shift();
        if(_nums.indexOf(num) != -1) _nums.shift();
        else return num;
    }
};