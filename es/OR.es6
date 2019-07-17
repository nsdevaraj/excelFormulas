
export default function OR() {
    var result = true;
    var list = fn.flatten(arguments);
    for (var i = 0; i < list.length; i++) {
        result = result && arguments[i];
        if (result) return true;
    }
    return false;
}
