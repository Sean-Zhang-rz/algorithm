function lengthOfLongestSubString(s) {
  const set = new Set();
  let j = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    while (j < s.length) {
      const ch = s[j];
      if (!set.has(ch)) {
        set.add(ch);
        result = Math.max(result, j - i + 1);
        j++;
      } else {
        break;
      }
    }
    set.delete(s[i]);
  }
  return result;
}
