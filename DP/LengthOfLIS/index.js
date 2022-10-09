function lengthOfLIS(nums) {
  if (!nums || !nums.length) return 0;
  if (nums.length === 1) return 1;
  // 制表法
  let result = 0;
  const dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 找之前结尾比nums[i]小的递增子序列，然后找到其中最长的
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  for (let value of dp) {
    result = Math.max(result, value);
  }
  return result;
}
