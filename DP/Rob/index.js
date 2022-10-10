function rob(nums) {
  if (!nums || !nums.length) return 0;
  // dp[i] 偷窃到第i个房子的金额
  const memo = [];
  memo[0] = 0;
  memo[1] = nums[0];
  const n = nums.length;
  for (let i = 2; i <= n; i++) {
    memo[i % 2] = Math.max(memo[(i - 1) % 2], memo[(i - 2) % 2] + nums[i - 1]);
  }
  return memo[n % 2];
}
