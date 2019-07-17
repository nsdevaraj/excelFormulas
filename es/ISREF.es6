export default function ISREF(v) {
  return (v.constructor.name === 'RANGE' || v.constructor.name === 'CELL'); 
}
