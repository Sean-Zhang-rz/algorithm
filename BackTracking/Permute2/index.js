function permute(nums) {
  const result = [];
  if (!nums || !nums.length) return result;
  const visited = [];
  const list = [];
  nums.sort((a, b) => a - b);
  helper(result, list, nums, visited);
  return result;
}
function helper(result, list, nums, visited) {
  if (list.length === nums.length) {
    result.push([...list]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    // 剪枝
    if (visited[i] || (i !== 0 && nums[i - 1] === nums[i]) || !visited[i - 1]) continue;
    list.push(nums[i]);
    visited[i] = true;
    helper(result, list, nums, visited);
    list.pop();
    visited[i] = false;
  }
}
