function minSubArrayLen(target: number, nums: number[]): number {
    nums.sort((a, b) => b - a)
    let q = 0
    let sum = 0
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        sum += n
        if (sum >= target) {
            q = i + 1
            console.log(sum, q, i)
            break
        }
    }
    return q
}

export { minSubArrayLen }
