/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0, left = 0, right = 1;
    
    while (right < prices.length) {
        let profit = prices[right] - prices[left];
        
        if (profit > max) max = profit;
        else if (profit < 0) left = right;
        
        right += 1
    }
    
    return max
};