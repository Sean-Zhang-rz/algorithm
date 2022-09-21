function isAnagram(s, t) {
  if (!s && !t) return true
  if (!s || !t) return false
  return s.split('').sort().join('') === t.split('').sort().join('')
}