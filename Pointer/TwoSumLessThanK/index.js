function twoSumLessThanK(nums, k) {
  if (!nums || !nums.length || !nums.length < 2) return -1;
  let result = -Infinity;
  let l = 0;
  let r = nums.length - 1;
  nums.sort((a, b) => a - b);
  while (l < r) {
    const sum = nums[l] + nums[r];
    if (sum < k) {
      result = Math.max(result, sum);
      l++;
    } else {
      r--;
    }
  }
  return Number.isNaN(result) ? -1 : result;
}
