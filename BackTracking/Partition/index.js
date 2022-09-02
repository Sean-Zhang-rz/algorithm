function partition(s){
  const result = []
  if (!s) return result
  const list = []
  helper(result, list, s, 0)
  return result
}
function helper(result, list, s, pos) {
  if (s.length === pos) {
    result.push([...list])
    return
  }
  for(let i = pos; i < s.length; i++) {
    const subStr = s.substring(pos, i + 1)
    if (!isPalindrome(subStr)) continue
    list.push(subStr)
    helper(result, list, s, i + 1)
    list.pop()
  }
}
function isPalindrome(s){
  let start = 0
  let end = s.length - 1
  while (start < end) {
    if (s[start] !== s[end]) return false
    start++
    end--
  }
  return true
}
