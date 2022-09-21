// 时间复杂度 O(n) 空间复杂度O(n * k)
function groupAnagrams (strs) {
  const result = []
  if (!strs || !strs.length) return result
  const map = new Map()
  for (let str of strs) {
    const sortedStr = str.split('').sort().join('') // O(klogk)
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
  map.forEach((value) => { // O(n)
    result.push(value)
  })
  return result
}