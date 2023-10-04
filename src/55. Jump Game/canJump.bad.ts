const nonZero = (nums: number[], steps: number, i: number) => {
    let nextI = steps + i
    if (nextI >= nums.length - 1) {
        return nums.length - 1
    }
    while (nextI > i) {
        if (nums[nextI] > 0) {
            return nextI
        }
        nextI--
    }
    return -1
}

function canJump(nums: number[]): boolean {
    if (nums.length === 1) {
        return true
    }

    const lastI = nums.length - 1

    let maxAheadI = 0
    for (let i = 0; i < nums.length; i++) {
        const steps = nums[i]
        const nextI = nonZero(nums, steps, i)

        console.log({ i, steps, nextI, maxAheadI })
        // is at the end?
        if (nextI >= lastI) {
            return true
        }

        maxAheadI = Math.max(maxAheadI, nextI)
        if (i >= maxAheadI) {
            return false
        }
    }
    return true
}

export { canJump }
