/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    var arr = [0,1,2],i=3
    if (arr[n]) return arr[n]
    for (;i<=n;++i){
        arr[i] = arr[i-1]+arr[i-2]
    }
    return arr[n]
};

module.exports.climbStairs = climbStairs