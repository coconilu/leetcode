const { merge } = require('./merge')

var result = merge([1, 5, 7], 3, [2, 4, 8, 10], 4)

console.log(result)