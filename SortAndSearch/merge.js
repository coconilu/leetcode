/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var continueIndex = 0, i = 0, j = 0;
    for (; i < n; ++i) {
        for (j = continueIndex; j < nums1.length; ++j) {
            if (nums2[i] < nums1[j]) {
                nums1.splice(j, 0, nums2[i])
                continueIndex = j + 1
                break
            } else if (j === (nums1.length - 1)) {
                // 已经遍历到nums1末尾，把nums2剩下的元素插入nums1的末尾
                [].push.apply(nums1, nums2.splice(i))
                i = n // 防止继续循环nums2
                break
            }
        }
    }
    return nums1
};

exports.merge = merge