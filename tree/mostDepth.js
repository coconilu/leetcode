/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
    if (A.length !== B.length) return false
    var i, length,Bchar
    for (i = 0, length = A.length, Bchar = B.charAt(0); i < length; ++i) {
        if (A.charAt(i) === Bchar && ((A.slice(i) + A.slice(0, i) === B))) {
            return true
        }
    }
    return false
};

console.log(rotateString("abcde", "cdeab"))