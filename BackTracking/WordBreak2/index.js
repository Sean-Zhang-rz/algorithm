function wordBreak(s, wordDict) {
  if (!s || !wordDict || !wordDict.length) return [];
  const result = [];
  const set = new Set();
  for (let item of wordDict) {
    set.add(item);
  }
  const list = [];
  helper(result, list, s, set, 0);
  return result;
}
function helper(result, list, s, set, pos) {
  if (pos === s.length) {
    result.push(list.join(' '));
    return;
  }
  for (let i = pos; i < s.length; i++) {
    const subStr = s.substring(pos, i + 1);
    if (!set.has(subStr)) continue;
    list.push(subStr);
    helper(result, list, s, set, i + 1);
    list.pop();
  }
}
