/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s: string): number {
    const subs = getSubs(s);
    let pair = 0;
    for (let i=0; i<subs.length-1; i++) {
        for (let j=i+1; j<subs.length; j++) {
            const s1 = subs[i];
            const s2 = subs[j];
            if (isAnagram(s1, s2)) {
                pair+=1;
            }
        }
    }
    return pair;
}

function countItems<T>(ln: number, getKey: (n: number) => T) {
    const m = new Map<T, number>()
    for (let i = 0; i < ln; i++) {
        const c = getKey(i)
        const n = m.get(c) ?? 0
        m.set(c, n + 1)
    }
    return m
}

function getSubs(str: string): string[] {
    const subs: string[] = []
    for (let is = 0; is < str.length; is++) {
        for (let ie = is + 1; ie <= str.length; ie++) {
            const sub = str.substring(is, ie)
            subs.push(sub)
        }
    }
    return subs
}

function isAnagram(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false
    }
    if (s1 === s2) {
        return true
    }
    const m = countItems(s2.length, i => s2.charAt(i));
    for (let i = 0; i < s1.length; i++) {
        const c = s1.charAt(i)
        const n = m.get(c) ?? 0
        if (n === 0) {
            return false
        }
        m.set(c, n - 1)
    }
    return true
}

export { sherlockAndAnagrams }
