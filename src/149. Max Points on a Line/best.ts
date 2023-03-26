const getSlope = (p1: number[], p2: number[]) => {
    if (p1[0] === p2[0]) {
        return Infinity
    }
    return (p1[1] - p2[1]) / (p1[0] - p2[0])
}
export const maxPoints = (points: number[][]): number => {
    if (points.length < 2) {
        return points.length
    }
    let maxPoints = 0
    for (let i = 0; i < points.length; i++) {
        const map = new Map<number, number>()
        for (let j = i + 1; j < points.length; j++) {
            const slope = getSlope(points[i], points[j])
            map.set(slope, (map.get(slope) || 1) + 1)
        }
        for (const v of map.values()) {
            maxPoints = Math.max(maxPoints, v)
        }
    }
    return maxPoints
}
