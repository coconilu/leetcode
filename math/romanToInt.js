/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var tags = {}, result = 0
    tags['I'] = 1
    tags['V'] = 5
    tags['X'] = 10
    tags['L'] = 50
    tags['C'] = 100
    tags['D'] = 500
    tags['M'] = 1000

    for (var i = 0, length = s.length; i < length; ++i) {
        if (i + 1 < length && tags[s[i]] < tags[s[i + 1]]) {
            result -= tags[s[i]]
        } else {
            result += tags[s[i]]
        }
    }
    return result
};

exports.romanToInt = romanToInt