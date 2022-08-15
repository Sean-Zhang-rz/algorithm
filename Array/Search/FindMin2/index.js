function findMin(nums) {
  let len = nums.length;
  if (nums == null || len === 0) return;
  let l = 0;
  let r = len - 1;
  while (l + 1 < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[l] < nums[r]) return nums[l];
    if (nums[l] < nums[mid]) {
      l = mid;
    } else if (nums[l] > nums[mid]) {
      r = mid;
    } else {
      l++;
    }
  }
  return Math.min(nums[l], nums[r]);
}
