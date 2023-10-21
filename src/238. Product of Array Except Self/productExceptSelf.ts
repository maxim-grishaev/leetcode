const product = (m: Map<number, number>, nx: number) => {
    let p = 1
    m.forEach((q, n) => {
        if (n === nx) {
            if (q > 1) {
                p *= Math.pow(n, q - 1)
            }
            return
        }
        p *= Math.pow(n, q)
    })
    return p
}

function productExceptSelf(nums: number[]): number[] {
    const m = new Map<number, number>()
    let q0 = 0
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        m.set(n, m.get(n) ?? 0 + 1)
        if (n == 0) {
            q0++
        }
    }
    if (q0 > 1) {
        return new Array(nums.length).fill(0)
    }
    if (q0 === 1) {
        return nums.map((n) => (n === 0 ? product(m, n) : 0))
    }
    return nums.map((n) => product(m, n))
}

export { productExceptSelf }
