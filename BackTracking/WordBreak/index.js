function wordBreak(s, wordDict) {
  if (!s || !wordDict || !wordDict.length) return false;
  const memo = Array.from({ length: s.length }).fill(-1);
  const set = new Set();
  for (let item of wordDict) {
    set.add(item);
  }
  return helper(memo, s, set, 0);
}
function helper(memo, s, set, pos) {
  if (pos === s.length) return true;
  if (memo[pos] !== -1) return memo[pos] === 1;
  for (let i = pos; i < s.length; i++) {
    if (!set.has(s.substring(pos, i + 1))) continue;
    const result = helper(memo, s, set, i + 1);
    if (result) {
      memo[pos] = 1;
      return true;
    }
  }
  memo[pos] = 0;
  return false;
}
