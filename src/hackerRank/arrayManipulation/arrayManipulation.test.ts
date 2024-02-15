import { arrayManipulation } from './arrayManipulation'

describe('arrayManipulation', () => {
    it.each([
        [
            10,
            [
                [1, 5, 3],
                [4, 8, 7],
                [6, 9, 1],
            ],
            10,
        ],
        [
            5,
            [
                [1, 2, 100],
                [2, 5, 100],
                [3, 4, 100],
            ],
            200,
        ],
    ])('arrayManipulation(%i, %p) should return %i', (n, queries, expected) => {
        const result = arrayManipulation(n, queries)
        expect(result).toBe(expected)
    })
})
