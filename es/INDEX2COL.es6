import {MAX_COLS} from 'formula-constants';
import INDEX2ROW from 'formula-index2row';

export default function INDEX2COL(index) {
  return index - (INDEX2ROW(index) * MAX_COLS);
}
