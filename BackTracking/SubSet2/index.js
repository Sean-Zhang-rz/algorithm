function subSet(nums) {
  const result = [];
  if (!nums || !nums.length) return result;
  const list = [];
  nums.sort((a, b) => a - b);
  helper(result, list, nums, 0);
  return result;
}
function helper(result, list, nums, pos) {
  result.push([...list]);

  for (let i = pos; i < nums.length; i++) {
    if (1 !== pos && nums[i - 1] === nums[i]) continue;
    list.push(nums[i]);
    helper(result, list, nums, i + 1);
    list.pop();
  }
}
