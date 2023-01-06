/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let price = 0, count=0;
    costs = costs.sort((a,b)=>(a-b));
    while(price <= coins && costs.length){
        let coin = costs.shift();
        if(coin <= coins){
            count++;
            coins -= coin;
        }
        else break;
    }
    return count;
};