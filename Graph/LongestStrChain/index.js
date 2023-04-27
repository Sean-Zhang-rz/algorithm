function longestStrChain(words) {
  if (!words?.length) return 0;
  const map = new Map();
  let count = 0;
  words.sort((a, b) => a.length - b.length);
  for (let word of words) {
    map.set(word, 1);
    for (let i = 0; i < word.length; i++) {
      const prev = word.substring(0, i) + word.substring(i + 1);
      if (map.has(prev)) {
        map.set(word, Math.max(map.get(word), map.get(prev) + 1));
      }
    }
    count = Math.max(count, map.get(word));
  }
  return count;
}
