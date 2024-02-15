
export const permutations = (str: string): string[] => {
    if (str.length <= 1) {
        return [str];
    }
    const result: string[] = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const perms = permutations(remainingChars);
        for (const perm of perms) {
            result.push(char + perm);
        }
    }
    return result;
}
