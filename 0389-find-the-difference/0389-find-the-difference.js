/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let _s = s.split("").sort();
    let _t = t.split("").sort();
    for(let i=0; i<_s.length;i++){
        if(_s[i]==_t[i]) continue
        else return _t[i]
    }
    return _t[_t.length-1]
};