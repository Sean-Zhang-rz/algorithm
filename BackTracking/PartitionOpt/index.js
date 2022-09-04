let isPalindrome = [];
function partition(s) {
  const result = [];
  if (!s) return result;
  const list = [];
  caculateIsPalindrome(s);
  helper(result, list, s, 0);
  return result;
}
function helper(result, list, s, pos) {
  if (pos === s.length) {
    result.push([...list]);
    return;
  }
  for (let i = pos; i < s.length; i++) {
    const subStr = s.substring(pos, i + 1);
    if (!isPalindrome[pos][i]) continue;
    list.push(subStr);
    helper(result, list, s, i + 1);
    list.pop();
  }
}
function caculateIsPalindrome(s) {
  isPalindrome = Array.from(Array(s.length), () => new Array(s.length));
  for (let i = 0; i < s.length; i++) {
    isPalindrome[i][i] = true;
  }
  for (let i = 0; i < s.length - 1; i++) {
    isPalindrome[i][i + 1] = s[i] === s[i + 1];
  }
  for (let i = s.length - 3; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      isPalindrome[i][j] = isPalindrome[i + 1][j - 1] && s[i] === s[j];
    }
  }
  console.log(isPalindrome);
}
const s = 'aab';
console.log(partition(s));
