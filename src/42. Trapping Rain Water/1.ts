const getNextHeightIndex = (heights: number[], i: number) => {
    const startHeight = heights[i]
    let secondMaxIdx = i + 1
    let secondMaxHeight = 0
    for (let j = i + 1; j < heights.length; j++) {
        if (heights[j] >= startHeight) {
            // console.log('_^', [i, j], [startHeight, heights[j]])
            return j
        }
        if (heights[j] > secondMaxHeight) {
            secondMaxIdx = j
            secondMaxHeight = heights[j]
        }
    }
    // console.log('^_', [i, secondMaxIdx], [startHeight, secondMaxHeight])
    return secondMaxHeight > 0 ? secondMaxIdx : -1
}

const countWater = (heights: number[], si: number, ei: number) => {
    const minHeight = Math.min(heights[si], heights[ei])
    let water = 0
    for (let i = si + 1; i < ei; i++) {
        water += minHeight - heights[i]
    }
    return water
}

export function trap(heights: number[]): number {
    let water = 0
    for (let si = 0; si < heights.length - 2; ) {
        const startHeight = heights[si]
        if (startHeight === 0) {
            si++
            continue
        }
        if (heights[si + 1] >= startHeight) {
            si++
            continue
        }
        const ei = getNextHeightIndex(heights, si)
        if (ei === -1) {
            break
        }
        if (ei - si === 1) {
            si++
            continue
        }
        water += countWater(heights, si, ei)
        si = ei
    }
    return water
}
