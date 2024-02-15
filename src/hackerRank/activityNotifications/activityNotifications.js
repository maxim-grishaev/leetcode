import { getMedianBySorted } from "../../lib/getMedian";

export function activityNotifications(/**@type {number[]}*/expenditure, /**@type {number}*/d) {
    if (d >= expenditure.length) {
        return 0;
    }
    // Write your code here
    let i = d;
    let count = 0;
    const prev = expenditure.slice(0,d);
    prev.sort((a,b)=>a-b);
    while (i<expenditure.length) {
        const n = expenditure[i];
        const mdn = getMedianBySorted(prev);
        if (n >= mdn * 2) {
            count+=1;
        }
        const vToRm = expenditure[i-d];
        i+=1;
        if (vToRm === n) {
            continue;
        }
        let outIdx = prev.findIndex(v => v === vToRm);
        prev.splice(outIdx, 1, n)
        let inIdx = prev.findIndex(v => v >= n);
        if (inIdx === -1) {
            prev.push(n);
        } else {
            prev.splice(inIdx, 0, n);
        }
    }
    return count
}
