function groupAnagrams (strs) {
  const result = []
  if (!strs || !strs.length) return result
  const map = new Map()
  for (let str of strs) {
    const sortedStr = str.split('').sort().join('')
    if (!map.has(sortedStr)) {
      const list = []
      list.push(str)
      map.set(sortedStr, list)
    } else {
      const list = map.get(sortedStr)
      list.push(str)
      map.set(sortedStr, list)
    }
  }
  map.forEach((value) => {
    result.push(value)
  })
  return result
}