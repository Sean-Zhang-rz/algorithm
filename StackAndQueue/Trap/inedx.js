var trap = function (height) {
  if (height == null || height.length === 0) return 0;
  let res = 0;
  let stack = [];
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[stack[stack.length - 1]] < height[i]) {
      let top = stack.pop();
      if (!stack.length) break;
      let left = stack[stack.length - 1];
      let h = Math.min(height[left], height[i]) - height[top];
      res += h * (i - left - 1);
    }
    stack.push(i);
  }
  return res;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
