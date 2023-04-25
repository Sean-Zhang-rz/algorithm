function triangleNumber(nums) {
  if (!nums || !nums.length) return 0;
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = nums.length - 1; i >= 2; i--) {
    let start = 0;
    let end = i - 1;
    while (start < end) {
      const sum = nums[start] + nums[end];
      if (sum > nums[i]) {
        count += end - start;
        end--;
      } else {
        start++;
      }
    }
  }
  return count;
}