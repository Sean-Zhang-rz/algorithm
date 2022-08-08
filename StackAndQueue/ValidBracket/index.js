var isValid = function (s) {
  if (s == null || s.length % 2 !== 0) return false
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (isLeftBracket(s[i])) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false
      const left = stack.pop()
      if (!isMatch(left, s[i])) return false
    }
  }
  return !stack.length
};
function isLeftBracket(str) {
  return ['(', '{', '['].indexOf(str) !== -1;
}
function isMatch(left, right) {
  return {
    '{': '}',
    '[': ']',
    '(': ')'
  }[left] === right
}