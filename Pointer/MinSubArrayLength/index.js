function minSubArrayLength(target, nums) {
  if (!nums || !nums.length || !target) return 0;
  let j = 0;
  let sum = 0;
  let result = Infinity;
  for (let i = 0; i < nums.length; i++) {
    while (j < nums.length && sum < target) {
      sum += nums[j];
      j++;
    }
    if (sum >= target) {
      result = Math.min(result, j - i);
    }
    sum -= nums[i];
  }
  return result === Infinity ? 0 : result;
}
