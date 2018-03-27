/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    var result = [], i = 0, temp = this.nums.concat(), index
    while (temp.length > 0) {
        index = Math.floor(Math.random() * temp.length)
        result.push(temp[index])
        temp.splice(index, 1)
    }
    return result
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

 exports.Solution = Solution