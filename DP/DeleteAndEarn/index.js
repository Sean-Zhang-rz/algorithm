function deleteAndEarn(nums) {
  if (!nums || !nums.length) return 0;
  let max = 0;
  for (let num of nums) {
    max = Math.max(max, num);
  }
  const values = new Array(max + 1).fill(0);
  for (let num of nums) {
    values[num] += num;
  }
  const memo = [];
  memo[0] = values[0];
  memo[1] = Math.max(values[0], values[1]);
  for (let i = 2; i < values.length; i++) {
    memo[i % 2] = Math.max(memo[(i - 1) % 2], memo[(i - 2) % 2] + values[i]);
  }
  return memo[(values.length - 1) % 2];
}
