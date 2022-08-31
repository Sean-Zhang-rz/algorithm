function generateParenthesis(n) {
  const result = [];
  if (!n) return result;
  const list = Array.from({ length: 2 * n });
  helper(result, list, n, n, 0);
  return result;
}
function helper(result, list, leftRemain, rightRemain, index) {
  if (list.length === index) {
    result.push(list.join(''));
    return;
  }
  if (leftRemain) {
    list[index] = '(';
    helper(result, list, leftRemain - 1, rightRemain, index + 1);
  }
  if (rightRemain > leftRemain) {
    list[index] = ')';
    helper(result, list, leftRemain, rightRemain - 1, index + 1);
  }
}
