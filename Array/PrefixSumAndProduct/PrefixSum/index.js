function sumRange(nums) {
  if (nums.length < 2) return;
  const prefixSum = [nums[0]];
  for (let i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
}
