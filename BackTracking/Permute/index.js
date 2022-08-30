function permute(nums) {
  const result = [];
  if (!nums || !nums.length) return result;

  const list = [];
  helper(result, list, nums);
  return result;
}
function helper(result, list, nums) {
  if (list.length === nums.length) {
    result.push([...list]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    // 剪枝
    if (list.indexOf(nums[i]) > -1) continue;
    list.push(nums[i]);
    helper(result, list, nums);
    list.pop();
  }
}
