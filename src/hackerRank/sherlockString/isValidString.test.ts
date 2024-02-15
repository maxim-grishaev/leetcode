import { isValid } from "./isValidString";

describe('hkr sherlock', () => {
    it.each([
        ["abcdefghhgfedecba", "YES"],
        ["aabbccddeefghi", "NO"],
        ["abc", "YES"],
        ["aabbc", "NO"],
        ["aabbcc", "YES"],
        ["aabbccc", "YES"],
        ["aabbcccc", "NO"],
    ])('test case %p + %p = %p', (s, exp) => {
        expect(isValid(s)).toBe(exp);
    });
});
