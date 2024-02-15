import { countItems } from "../../lib/countItems";

function countTripletsSlow(/** @type number[] */arr, /** @type number */r) {
    // arr.sort((a,b) => a-b);

    /** @type {Map<number, number>} */
    const m = new Map();
    for (let i=arr.length-1; i>=0; i--) {
        m.set(arr[i], i);
    }

    let count = 0;
    for (let i1=0; i1<arr.length-2; i1++) {
        const v1 = arr[i1];
        const v2 = v1 * r;
        const v3 = v2 * r;
        // console.log('triplet',  v1, v2, v3);

        for (let i2=Math.max(i1+1,m.get(v2)); arr[i2]<=v2; i2++) {
            if (arr[i2] !== v2) {
                continue;
            }
            for (let i3=Math.max(i2+1,m.get(v3)); arr[i3]<=v3; i3++) {
                if (arr[i3] !== v3) {
                    continue;
                }
                // console.log(count, [i1, i2, i3]);
                count += 1;
            }
        }
    }
    return count;
}

function countTripletsMap(/** @type number[] */arr, /** @type number */r) {
    if (r === 1) {
        const m = countItems(arr.length, i => arr[i]);
        return Array.from(m.values()).reduce((mem, n) => mem + n * (n-1) * (n-2) / 6, 0);
    }
    /** @type {Map<number, number[]>} */
    const m = new Map();
    let count = 0;
    const process = (i, v) => {
        // const bit = 2 ** i;
        //
        const arr = m.get(v) ?? [0, 0, 0];
        arr[i] += 1;
        const allFilled = arr.every(v => v > 0);
        m.set(v, arr);

        console.log('arr', { v, r, i, arr });
        if (allFilled) {
            console.log('count bfr', count);
            count += arr[i] === 1 ? arr.reduce((mem, n) => mem * n) : 1;
            console.log('count aft', count);
        }
    };
    for (let i=0; i<arr.length; i++) {
        const v = arr[i];
        process(0, v);
        process(1, v * r);
        process(2, v * r * r);
    }
    return count;
}

export { countTripletsSlow, countTripletsMap, countTripletsMap as countTriplets };
