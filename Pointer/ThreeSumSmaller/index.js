function threeSumSmaller(nums, target) {
  if (!nums || !nums.length) return;
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum < target) {
        count += end - start;
        start++;
      } else {
        end--;
      }
    }
  }
  return count;
}
