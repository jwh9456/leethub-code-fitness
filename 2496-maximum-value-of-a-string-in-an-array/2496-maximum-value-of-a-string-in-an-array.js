/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    let maxValue = 0;
    for (let current of strs) {
        let currentValue = Number(current);
        if (isNaN(currentValue)) {
            maxValue = Math.max(maxValue, current.length);
        } else {
            maxValue = Math.max(maxValue, currentValue);
        }
    }
    return maxValue;
};