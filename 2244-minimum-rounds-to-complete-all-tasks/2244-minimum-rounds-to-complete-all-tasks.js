/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const hash = {};
    let minRounds = 0;
    
    for (let task of tasks) {
        hash[task] = hash[task] + 1 || 1;
    }
    
    for (let count of Object.values(hash)) {
        if (count < 2) return -1;
        minRounds += Math.ceil(count / 3);
    }
    
    return minRounds;
};