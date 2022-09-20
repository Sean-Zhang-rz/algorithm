function wordPattern(pattern, s) {
  const words = s.split(' ');
  if (!words || !words.length || words.length !== pattern.length) return false;
  const keyMap = new Map();
  const valueMap = new Map();
  for (let i = 0; i < words.length; i++) {
    if (keyMap.has(pattern[i])) {
      if (keyMap.get(pattern[i]) !== words[i]) return false;
    } else {
      if (valueMap.get(words[i])) return false;
      keyMap.set(pattern[i], words[i]);
      valueMap.set(words[i], pattern[i]);
    }
  }
  return true;
}
