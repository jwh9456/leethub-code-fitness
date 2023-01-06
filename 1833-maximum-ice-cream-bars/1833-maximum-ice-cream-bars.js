/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let count=0;
    costs = costs.sort((a,b)=>(a-b));
    while(costs.length){
        let coin = costs.shift();
        if(coin <= coins){
            count++;
            coins -= coin;
        }
        else break;
    }
    return count;
};