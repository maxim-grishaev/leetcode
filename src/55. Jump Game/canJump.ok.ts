function canJump(nums: number[]): boolean {
    if (nums.length === 1) {
        return true
    }

    let budget = nums[0]
    if (budget === 0) {
        return false
    }
    const lastI = nums.length - 1
    for (let i = 1; i < lastI; i++) {
        budget = Math.max(budget - 1, nums[i])
        if (budget <= 0) {
            return false
        }
    }
    return true
}

export { canJump }
