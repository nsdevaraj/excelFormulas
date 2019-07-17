import {d1900, MilliSecondsInDay} from 'formula-constants';

export default function(date) {
    return Math.ceil((date - d1900) / MilliSecondsInDay) + ((date > -2203891200000)?2:1);
}
