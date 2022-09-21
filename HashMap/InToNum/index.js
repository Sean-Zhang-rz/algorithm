function inToNum (s) {
  if (!s) return
  let result = 0
  const map = new Map()
  map.set('M', 1000)
  map.set('CM', 900)
  map.set('D', 500)
  map.set('CD', 400)
  map.set('C', 100)
  map.set('XC',90)
  map.set('L', 50)
  map.set('XL', 40)
  map.set('X', 10)
  map.set('IX', 9)
  map.set('V', 5)
  map.set('IV', 4)
  map.set('I', 1)
  for (let i = 0; i < s.length; i++) {
    if (map.has(`${s[i]}${s[i + 1]}`)) {
      result += map.get(`${s[i]}${s[i + 1]}`)
    } else if (map.has(s[i])) {
      result += map.get(s[i])
    } else {
      throw Error('这不是罗马字')
    }
  }
  return result
}