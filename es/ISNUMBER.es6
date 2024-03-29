
export default function isNumber(value) {
    return typeof(value) === 'number' && !isNaN(value) && isFinite(value);
}
