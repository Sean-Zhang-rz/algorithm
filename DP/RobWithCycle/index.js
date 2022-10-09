function rob(nums) {
  if (!nums || !nums.length) return 0
  const memo1 = []
  const memo2 = []
  memo1[0] = 0
  memo1[1] = nums[0]
  memo2[0] = 0
  memo2[1] = 0
  const n = nums.length
  for(let i = 2; i <= n; i++) {
    if (i === n) {
      memo1[i  % 2] = memo1[(i - 1)  % 2]
    } else {
      memo1[i % 2] = Math.max(memo1[(i - 1) % 2], memo1[(i - 2) % 2] + nums[i - 1])
    }
    memo2[i % 2] = Math.max(memo2[(i - 1) % 2], memo2[(i - 2) % 2] + nums[i - 1])
  }
  return Math.max(memo1[n % 2], memo2[n % 2])
}