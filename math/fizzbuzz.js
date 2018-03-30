/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var i = 1, result = []
    for (; i <= n; ++i) {
        switch (true) {
            case i % 15 === 0:
                result.push('FizzBuzz')
                break
            case i % 5 === 0:
                result.push('Buzz')
                break
            case i % 3 === 0:
                result.push('Fizz')
                break
            default:
                result.push(i + '')
        }
    }
    return result
};

exports.fizzBuzz = fizzBuzz