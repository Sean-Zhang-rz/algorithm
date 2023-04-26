function maxSumTwoOverlap(nums, l, r) {
  if (!nums?.length) return 0;
  if (l + r >= nums.length) return nums.reduce((a, b) => a + b, 0);
  return Math.max(help(nums, l, r), help(nums, r, l));
}
function help(nums, l, r) {
  let suml = nums.slice(0, l).reduce((a, b) => a + b, 0);
  let maxSuml = suml;
  let sumr = nums.slice(l, l + r).reduce((a, b) => a + b, 0);
  res = maxSuml + sumr;
  for (let i = l + r, j = l; i < nums.length; i++, j++) {
    suml += nums[j] - nums[j - l];
    maxSuml = Math.max(maxSuml, suml);
    sumr += nums[i] - nums[i - r];
    res = Math.max(res, maxSuml + sumr);
  }
  return res;
}
