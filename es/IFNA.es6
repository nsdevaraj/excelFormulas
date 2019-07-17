
import error from 'formula-errors';

export default function IFNA(value, value_if_na) {
    return value === error.na ? value_if_na : value;
}
