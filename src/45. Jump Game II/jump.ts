const correctFarthestJump = (
    nums: number[],
    startI: number,
    maxI: number,
): number => {
    let bestJ = startI + nums[startI]
    if (bestJ >= maxI) {
        return maxI
    }

    let val = nums[bestJ]
    while (val === 0) {
        val = nums[--bestJ]
        if (bestJ <= startI) {
            throw new Error(`No progress made! ${startI}`)
        }
    }

    return bestJ
}

const farthestJump = (nums: number[], startI: number): number => {
    if (nums[startI] < 2) {
        return startI + 1
    }

    const lastI = nums.length - 1
    const maxJ = Math.min(nums[startI] + startI, lastI)
    if (maxJ >= lastI) {
        return lastI
    }

    let maxJump = 0
    let bestJ = startI
    for (let j = startI + 1; j < maxJ; j++) {
        const val = nums[j]
        if (val === 0) {
            continue
        }
        const jj = correctFarthestJump(nums, j, lastI)
        console.log({ j, jj })
        if (jj >= lastI) {
            return j
        }
        if (jj > maxJump) {
            bestJ = j
            maxJump = jj
        }
    }

    if (bestJ === -1) {
        throw new Error(`No progress made! ${startI}`)
    }

    return bestJ
}

function jump(nums: number[]): number {
    if (nums.length < 3) {
        return nums.length - 1
    }

    let jumps = 0
    let i = 0
    const lastI = nums.length - 1
    while (i < lastI) {
        i = farthestJump(nums, i)
        console.log('jump to', i)
        jumps++
    }
    return jumps
}

export { jump, farthestJump }
