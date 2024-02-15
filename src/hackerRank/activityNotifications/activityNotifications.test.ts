import { activityNotifications } from "./activityNotifications";

describe('hkr activityNotifications', () => {
    it.each([
        [[10, 20, 30, 40, 50], 3, 1],
        // [[2, 3, 4, 2, 3, 6, 8, 4, 5], 5, 2],
        // [[1, 2, 3, 4, 4], 4, 0],
    ])('test case %p + %p = %p', (arr, d, exp) => {
        expect(activityNotifications(arr, d)).toBe(exp);
    });
});
