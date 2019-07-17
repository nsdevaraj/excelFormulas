
import ISERROR from 'formula-iserror';
import ISBLANK from 'formula-isblank';
import error from 'formula-errors';

export default function VLOOKUP(needle, table, index, exactmatch) {             

    if (ISERROR(needle) || ISBLANK(needle)) {
        return needle;
    }

    index = index || 0;           
    exactmatch = exactmatch || false;             
    for (var i = 0; i < table.length; i++){               
        var row = table[i];               
        if ((exactmatch && row[0]===needle) ||
            ((row[0] === needle) ||
             (typeof row[0] === "string" && row[0].toLowerCase().indexOf(needle.toLowerCase()) != -1) )) {
            return (index < (row.length+1) ? row[index-1] : row[0]);
        }
    }
    
    return error.na;

}
