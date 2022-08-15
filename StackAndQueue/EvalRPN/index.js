// 逆波兰表达式
var evalRPN = function (tokens) {
  if (tokens.length === 1 && !Number.isNaN(+tokens[0])) return +tokens[0];
  if (tokens == null || tokens.length < 3) return;
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!Number.isNaN(+tokens[i])) {
      stack.push(+tokens[i]);
    } else {
      const right = stack.pop();
      const left = stack.pop();
      stack.push(operate(left, right, tokens[i]));
    }
  }
  return stack.pop();
};
function operate(left, right, operation) {
  if (operation === '+') {
    return left + right;
  } else if (operation === '-') {
    return left - right;
  } else if (operation === '*') {
    return left * right;
  } else if (operation === '/') {
    return left / right < 0 ? Math.ceil(left / right) : Math.floor(left / right);
  }
  return undefined;
}
