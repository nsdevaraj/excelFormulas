
import FLATTEN from 'formula-flatten';

export default function SUM() {
    var numbers = FLATTEN(arguments);
    return numbers.reduce((a, b) => a + b);
}
