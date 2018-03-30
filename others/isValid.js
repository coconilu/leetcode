/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var temp1 = s, temp2
    while (true) {
        temp2 = temp1.replace(/\(\)|\{\}|\[\]/g, '')
        if (temp1 === temp2) {
            if (temp2 === '') return true
            else return false
        }
        temp1 = temp2
    }
};