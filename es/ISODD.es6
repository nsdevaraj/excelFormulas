
export default function isOdd(value) {
    return (Math.floor(Math.abs(value)) & 1) ? true : false;
}
