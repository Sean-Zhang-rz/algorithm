function inToRoman(num) {
  // 拆成两个数组，
  // 一个罗马字符数组，一个数字数组，7种常规字符 + 6中特殊字符
  const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X','IX', 'V', 'IV', 'I']
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const result = []
  for (let i = 0; i < nums.length; i++) {
    while (num >= nums[i]) {
      num -= nums[i]
      result.push(romans[i])
    }
  }
  return result.join('')
}