import ISNUMBER from 'formula-isnumber';
import error from 'formula-errors';

export default function ABS(value) {
  if (!ISNUMBER(value)) {
    return error.value;
  }
  return Math.abs(value);
}
