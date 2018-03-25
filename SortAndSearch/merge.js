/**从后往前排序
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var nums1Index = m - 1,
        nums2Index = n - 1,
        resultIndex = m + n - 1
    while (nums1Index >= 0 && nums2Index >= 0) {
        if (nums1[nums1Index] >= nums2[nums2Index]) {
            nums1[resultIndex] = nums1[nums1Index]
                --resultIndex
                --nums1Index
        } else {
            nums1[resultIndex] = nums2[nums2Index]
                --resultIndex
                --nums2Index
        }
    }
    if (nums1Index < 0) {
        for (; nums2Index > 0; --nums2Index, --resultIndex) {
            nums1[resultIndex] = nums2[nums2Index]
        }
    }
    console.log(nums1)
};

exports.merge = merge