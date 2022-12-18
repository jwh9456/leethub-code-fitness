/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const res = new Array(temperatures.length).fill(0)
    const stack = []
    for(let i = 0; i < temperatures.length; i++){
        while(temperatures[i] > temperatures[stack.at(-1)]){
            const j = stack.pop()
            res[j] = i - j
        }
        stack.push(i)
    }
    return res
};