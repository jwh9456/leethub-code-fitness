/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length == 1 ) return true;
    if(nums[0]<=0) return false;

    let idx = 0;
    for(let i  =0; i<nums.length; i++){
        idx = Math.max(nums[i] +i, idx);
        if(idx <i +1) break;
    }
    return idx >= nums.length -1
};