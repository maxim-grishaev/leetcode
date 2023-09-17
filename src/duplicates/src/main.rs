struct Solution {}

fn main() {
    let mut nums = vec![1, 1, 2];
    Solution::remove_duplicates(&mut nums);
}

impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        if nums.len() == 0 {
            return 0;
        }

        let mut gap_length = 0;

        let mut val_prev = nums[0];

        for idx in 1..nums.len() {
            let val_idx = nums[idx];

            if val_prev == val_idx {
                gap_length += 1;
            } else {
                if gap_length > 0 {
                    nums[idx - gap_length] = val_idx;
                }
            }

            val_prev = val_idx;
        }

        let left_count = nums.len() - gap_length;

        nums.truncate(left_count);

        return left_count as i32;
    }
}
