function lengthOfLIS(nums) {
  if (!nums || !nums.length) return 0;
  if (nums.length === 1) return 1;
  // 制表法
  let result = 0;
  let max = 0
  const dp = new Array(nums.length).fill(1);
  const count = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 找之前结尾比nums[i]小的递增子序列，然后找到其中最长的
      if (nums[i] > nums[j]) {
        // 制表法 -> 判断dp[i] 和 dp[j + 1]的关系
        if (dp[i] < dp[j] + 1) {
          dp[i] = dp[j]  + 1
          // 找到了相当于新的LIS
          count[i] = count[j]
        } else if (dp[i] === dp[j] + 1){
          // 又一次遇到了该长度的LIS
          count[i] += count[j]
        }
      }
    }
  }
  for (let value of dp) {
    max = Math.max(max, value);
  }
  // 将所有等于最长严格递增子序列的长度count[i]相加
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] === max) result+= count[i]
  }
  return result
}
