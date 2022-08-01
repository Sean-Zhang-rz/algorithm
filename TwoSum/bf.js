function twoSumBf(target, nums) {
  if (nums.length < 2) return;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}

module.exports = twoSumBf;
