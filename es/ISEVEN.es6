
export default function isEven(value) {
    return (Math.floor(Math.abs(value)) & 1) ? false : true;
}
