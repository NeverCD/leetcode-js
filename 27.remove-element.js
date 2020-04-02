/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    let flag = 0;
    for(var i= 0; i<= len-1; i++) {
        if(nums[i] != val) {
            let temp = nums[flag];
            nums[flag] = nums[i];
            nums[i] = temp; 
            flag++;
        }
    }
    return flag;
};
// @lc code=end

