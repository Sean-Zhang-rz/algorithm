function threeSumBf(target, nums) {
  if (nums.length < 3) return;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let h = i + 2; h < nums.length; h++) {
        if (nums[i] + nums[j] + nums[h] === target) return [nums[i], nums[j], nums[h]];
      }
    }
  }
}

module.exports = threeSumBf;
