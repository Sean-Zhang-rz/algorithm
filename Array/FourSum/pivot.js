function fourSumPivot(nums, target) {
  let n = nums.length;
  if (n < 4) return [];
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 3; i++) {
    if (nums[i] > target) return res;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      if (nums[j] > target) return res;
      if (j > 1 && nums[j] === nums[j + 1]) continue;
      const theOther = target - nums[i] - nums[j];
      let left = j + 1;
      let right = n - 1;
      while (left < right) {
        // console.log(res);
        if (nums[left] + nums[right] === theOther) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (nums[left] + nums[right] > theOther) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return res;
}

module.exports = fourSumPivot;
