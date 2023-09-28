function candy(r: number[]): number {
    if (r.length < 3) {
        return r[0] === r[1] ? 2 : 3
    }
    const coeffs = new Array(r.length).fill(0)
    let curr = r[1]
    const li = r.length - 1

    let prv = r[0]
    for (let i = 1; i <= li; i++) {
        prv = r[i - 1]
        curr = r[i]
        if (prv < curr) {
            coeffs[i] = coeffs[i - 1] + 1
        }
    }

    prv = r[li]
    for (let i = li - 1; i >= 0; i--) {
        prv = r[i + 1]
        curr = r[i]
        if (curr > prv) {
            coeffs[i] = Math.max(coeffs[i], coeffs[i + 1] + 1)
        }
    }
    // console.log(coeffs)
    return coeffs.reduce((a, b) => a + b, r.length)
}

export { candy }
