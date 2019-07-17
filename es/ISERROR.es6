
import error from 'formula-errors';
import ISERR from 'formula-iserr';
export default function isError(value) {
    return ISERR(value) || value === error.na;
}
