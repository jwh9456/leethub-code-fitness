/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var output=[];
    for (var i = 0; i<nums.length; i++){
        if(output.length == 2) return output;
        else if(nums.includes(target - nums[i]) && nums.indexOf(target - nums[i]) != i){
            output.push(i, nums.indexOf(target - nums[i]));
            return output;
        }
        else continue;
    }
};