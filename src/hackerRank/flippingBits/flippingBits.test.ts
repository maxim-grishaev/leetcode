import { flippingBits } from "./flippingBits"

describe('flippingBits', () => {
    it.each([
        [2147483647, 2147483648],
        [1, 4294967294],
        [0, 4294967295]

    ])('flip %p => %p', (inp, out) => {
        expect(flippingBits(inp)).toBe(out);
    })
})
