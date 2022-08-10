function binarySearch(nums, target) {
  const len = nums.length;
  if (nums == null || len === 0) return -1;
  let l = 0;
  let r = len - 1;
  while (l + 1 < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      l = mid;
    } else {
      r = mid;
    }
  }
  if (nums[l] === target) return l;
  if (nums[r] === target) return r;
  return -1;
}
