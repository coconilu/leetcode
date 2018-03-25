/**二分查找法
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        var h = 0,
            mid
        while (h < n) {
            mid = Math.floor((h + n) / 2)
            if (isBadVersion(mid)) n = mid
            else h = mid + 1
        }
        return n
    };
};