function threeSumClosest(nums, target) {
  if (!nums || !nums.length || nums.length < 3) return 0;
  if (nums.length === 3) return nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);
  let result = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === target) {
        return target;
      }
      if (Math.abs(sum - target) < Math.abs(result - target)) result = sum;
      if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  }
  return result;
}
