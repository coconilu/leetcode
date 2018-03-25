/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var max = 0,
        premise = 0,
        i = 0,
        length = nums.length
    for (; i < length; ++i) {
        premise += nums[i]
        if (premise > max) {
            max = premise
        } else if (premise < 0) {
            premise = 0
        }
    }
    if (max === 0) {
        max = nums[0]
        for (i = 1; i < length; ++i) {
            max = max > nums[i] ? max : nums[i]
        }
    }
    return max
};