
import error from 'formula-errors';

export default function ISERR(value) {
    if (typeof value === 'undefined' || value === null) { return false; }
    value = value.valueOf();
  return ([error.nil,
           error.value,
           error.ref,
           error.name,
           error.num,
           error.error,
           error.data,
           error.missing,
           error.unknown]).indexOf(value) >= 0 ||
        (typeof value === 'number' && (value !== value || !isFinite(value))); // ensure numbers are not NaN or Infinity

}
