function twoSumPivot(target, nums) {
  if (nums.length < 2) return [];
  for (let i = 0; i < nums.length; i++) {
    let theOther = target - nums[i];
    for (let j = i + 1, k = nums.length - 1; j <= k; j++, k--) {
      console.log(i, j, k);
      if (nums[j] === theOther) return [i, j];
      if (nums[k] === theOther) return [i, k];
    }
  }
  return [];
}

module.exports = twoSumPivot;
