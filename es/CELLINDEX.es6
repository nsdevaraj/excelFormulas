import {MAX_COLS} from 'formula-constants';

export default function CELLINDEX(row, col) {
  return (Math.floor((row) * MAX_COLS) + (col));
}
