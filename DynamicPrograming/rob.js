/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    var preMaxSum = nums[0],
        behMaxSum = nums[0] > nums[1] ? nums[0] : nums[1],
        temp,
        i = 2,
        len = nums.length
    for (; i < len; ++i) {
        temp = behMaxSum
        behMaxSum = Math.max(behMaxSum, preMaxSum + nums[i])
        preMaxSum = temp
    }
    return behMaxSum
};