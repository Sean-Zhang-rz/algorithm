function searchRange(nums, target) {
  if (nums == null || nums.length < 1) return [-1, -1];
  let l = 0;
  let r = nums.length - 1;
  const res = [];
  while (l + 1 < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] < target) {
      l = mid;
    } else {
      r = mid;
    }
  }
  res[0] = nums[l] === target ? l : nums[r] === target ? r : -1;

  l = 0;
  r = nums.length - 1;
  while (l + 1 < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] <= target) {
      l = mid;
    } else {
      r = mid;
    }
  }
  res[1] = nums[r] === target ? r : nums[l] === target ? l : -1;

  return res;
}
console.log(searchRange([2, 2], 2));
