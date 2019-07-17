import INDEX2COL from 'formula-index2col';
import INDEX2ROW from 'formula-index2row';

/* Structure for CELL reference
 */
export default class CELL {

  /* Accepts a reference to sheet and cell index
   */
  constructor(sheet, index) {
    if (sheet.constructor.name !== 'SHEET') {
      throw Error('sheet is expected to be SHEET class');
    }
    
    this.sheet = sheet;
    this.index = index;
  }

  /* Returns object with row/col
   */
  getRow() {
    return INDEX2ROW(this.cellIndex);
  }

  getColumn() {
    return INDEX2COL(this.cellIndex);
  }

}
