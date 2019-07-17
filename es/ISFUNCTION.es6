
export default function isFunction(f) {
    return f && Object.prototype.toString.call(f) == '[object Function]';
};
