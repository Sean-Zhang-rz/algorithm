function isIsmorphic(s, t) {
  if (!s || !t || s.length !== t.length) return false
  const keyMap = new Map()
  const valueMap = new Map()
  for (let i = 0; i < s.length; i++) {
    if (keyMap.has(s[i])) {
      if (keyMap.get(s[i]) !== t[i]) return false
    } else {
      if (valueMap.has(t[i])) return false
      keyMap.set(s[i], t[i])
      valueMap.set(t[i], s[i])
    }
  }
  return true
}