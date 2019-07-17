
export default function(column) {

    // convert the column name into the column index

    // see toColumn for rant on why this is sensible even though it is illogical.
    var s = 0, secondPass;

    if (column != null && column.length > 0) {

        s = column.charCodeAt(0) - 'A'.charCodeAt(0);
        
        for (var i = 1; i < column.length; i++) {
            s+=1 // compensate for the weirdos that invented spreadsheet column naming
            s *= 26;
            s += column.charCodeAt(i) - 'A'.charCodeAt(0);
            secondPass = true;
        }
        
    } else {
        throw Error("Must provide a column");
    }

    return s;

}
