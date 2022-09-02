function wordBreak(s, wordDict) {
  if (!s || !wordDict || !wordDict.length) return [];
  const set = new Set();
  for (let item of wordDict) {
    set.add(item);
  }
  const memo = new Map();
  return helper(memo, s, set, 0);
}
function helper(memo, s, set, pos) {
  if (memo.has(pos)) return memo.get(pos);

  const result = [];

  if (pos === s.length) return result;

  if (set.has(s.substring(pos, s.length))) result.push(s.substring(pos, s.length));

  for (let i = pos; i < s.length; i++) {
    const subStr = s.substring(pos, i + 1);
    if (!set.has(subStr)) continue;
    const res = helper(memo, s, set, i + 1);
    for (let item of res) {
      result.push(subStr + ' ' + item);
    }
  }
  memo.set(pos, result);
  return result;
}
