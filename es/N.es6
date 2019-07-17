import ISNUMBER from 'formula-isnumber';
import ISERROR from 'formula-iserror';
import SERIAL from 'formula-serial';

export default function N(value) {
  if (ISNUMBER(value)) {
    return value;
  }
  if (value instanceof Date) {
    return serial(value);
  }
  if (value === true) {
    return 1;
  }
  if (value === false) {
    return 0;
  }
  if (ISERROR(value)) {
    return value;
  }
  return 0;
}
