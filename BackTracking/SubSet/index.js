function subSets(nums) {
  const result = [];
  if (!nums || !nums.length) return result;
  const list = [];
  helper(result, list, nums, 0);
  return result;
}

function helper(result, list, nums, pos) {
  // 1. 递归何时退出 ？
  // 2. 何时可把单一解list放到result中
  result.push([...list]);
  // 3. 递归分解成子问题 到下一层,(可能需要考虑到剪枝)
  for (let i = pos; i < nums.length; i++) {
    // (1) 把nums[i]加到单一解list里
    list.push(nums[i]);
    // (2) 递归计算以nums[i]结尾的单一解
    helper(result, list, nums, i + 1);
    // 回溯
    list.pop();
  }
}
