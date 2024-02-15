import { countTriplets } from './countTriplets.js';

describe('hkr triplets', () => {
    it.each([
        // [[1, 2, 4], 2, 1],
        // [[0, 2, 4], 2, 0],
        // [[1, 2, 2, 4], 2, 2],
        // [[1, 3, 9, 9, 27, 81], 3, 6],
        // [[1, 5, 5, 25, 125], 5, 4],
        [[1, 1, 1, 1, 1], 1, 10],
    ])('test case %p + %p = %p', (arr, r, exp) => {
        expect(countTriplets(arr, r)).toBe(exp);
    });
});
