import { mergeSort } from "./mergeSort";

describe('lib mergeSort', () => {
    it('sorts an array', () => {
        const arr = [3, 2, 1]
        const sorted = mergeSort(arr, (a, b) =>a-b)
        expect(sorted).toEqual([1, 2, 3])
    });
    it('sorts an array', () => {
        const arr = [2, 1, 3]
        const sorted = mergeSort(arr, (a, b) =>a-b)
        expect(sorted).toEqual([1, 2, 3])
    });
    it('returns same array', () => {
        const arr = [3, 2, 1]
        const sorted = mergeSort(arr, (a, b) =>a-b)
        expect(sorted).toBe(arr)
    });
});
