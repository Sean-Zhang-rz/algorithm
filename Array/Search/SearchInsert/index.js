/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums == null || nums.length < 1) return -1
  let l = 0;
  let r = nums.length - 1;

  while (l + 1 < r) {
    let mid = Math.floor((r + l) / 2);
    if (nums[mid] < target) {
      l = mid
    } else {
      r = mid
    }
  }
  if (nums[l] >= target) {
    return l
  } else if (nums[r] >= target) {
    return r
  } else {
    return r + 1
  }
};
console.log(searchInsert([1, 3, 5, 6], 0));