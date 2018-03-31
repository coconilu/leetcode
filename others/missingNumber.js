/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    var arr = new Array(nums.length + 1),
        i, length
    for (i = 0, length = nums.length; i < length; ++i) {
        arr[nums[i]] = nums[i]
    }
    for (i = 0, length = arr.length; i < length; ++i) {
        if (arr[i] === undefined) return i
    }
};