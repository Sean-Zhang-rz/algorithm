function combinationSum(candidates, target) {
  const result = [];
  if (!candidates || !candidates.length) return result;
  const list = [];
  candidates.sort((a, b) => a - b);
  helper(result, list, candidates, target, 0);
  return result;
}
function helper(result, list, candidates, target, pos) {
  if (target === 0) {
    result.push([...list]);
    return;
  }
  if (target < 0) return;
  for (let i = pos; i < candidates.length; i++) {
    if (i !== pos && candidates[i - 1] === candidates[i]) continue;
    list.push(candidates[i]);
    helper(result, list, candidates, target - candidates[i], i + 1);
    list.pop();
  }
}
