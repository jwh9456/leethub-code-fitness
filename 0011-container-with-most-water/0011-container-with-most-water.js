/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    let left = 0, right=heights.length-1, value=0;
    while(left < right){
        value = Math.max(value, (right-left)*Math.min(heights[left],heights[right]))
        heights[left] < heights[right] ? left++ : right--
    }
    return value
};