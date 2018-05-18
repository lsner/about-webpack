function deepCopy(obj) {
    var result = Array.isArray(obj) ? [] : {};
    if (Array.isArray(obj)) {
        result = obj.slice();
    } else if (typeof obj === 'object') {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    result[key] = deepCopy(obj[key])
                } else {
                    result[key] = obj[key]
                }
            }
        }
    }

    return result;

}
var obj = {a: "zhngsan", b: [1, 2, 3]}
var deepclone = deepCopy(obj)
deepclone.a = "aaaa"
console.log(deepclone);
console.log(obj);