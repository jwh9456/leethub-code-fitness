/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target)
    }
    else{
        for(var i=0; i<nums.length; i++){
            if(nums[i]<target){
                if(i != nums.length-1){
                    if(target<nums[i+1]) return i+1
                }
                else return i+1
            }
            else{
                return i
            }
        }
    }
};