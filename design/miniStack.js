/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = []
    this.sortedArr = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
    this.sortedArr = this.stack.concat().sort(function (x, y) {
        return x - y
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    console.log(this.stack)
    this.sortedArr = this.stack.concat().sort(function (x, y) {
        return x - y
    })
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.sortedArr[0]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 exports.MinStack = MinStack