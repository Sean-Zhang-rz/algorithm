function lengthOfLongestSubstringKDistinct(s) {
  if (!s || k === 0) return 0;
  const map = new Map();
  let j = 0;
  let n = s.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    while (j < n) {
      const ch = s[j];
      if (map.size < k || map.has(ch)) {
        map.set(ch, j);
        result = Math.max(result, j - i + 1);
        j++;
      } else {
        break;
      }
    }
    let midIndex = n - 1;
    for (let index of map.values()) {
      midIndex = Math.min(midIndex, index);
    }
    map.delete(s[midIndex]);
    i = midIndex;
  }
}
