function minWindow (s, t) {
  const map = {}
  for (let i of t) {
    map[i] = (map[i] || 0) + 1
  }
  let left = 0
  let right = 0
  let matchCount = 0
  let minLen = Infinity
  let minWindowStar = 0

  while (right < s.length) {
    const chr = s[right] 
    if (map[chr] > 0) matchCount++
    map[chr] = (map[chr] || 0) - 1
    right++

    while (matchCount === t.length) {
      if (right - left < minLen) {
        minLen = right - left
        minWindowStar = left
      }
      const chl = s[left]
      if (map[chl] === 0) matchCount--
      map[chl] = (map[chl] || 0) + 1
      left++
      console.log(chl, map, left);
    }
    // console.log(map);
  }
  return minLen === Infinity ? '' : s.substr(minWindowStar, minLen)
}
minWindow('ADOBECODEBANC', 'ABC')