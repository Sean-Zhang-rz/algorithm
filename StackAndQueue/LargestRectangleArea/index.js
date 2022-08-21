var largestRectangleArea = function (heights) {
  const stack = [];
  const len = heights.length;
  const left = Array.from({ length: len }).fill(-1);
  const right = Array.from({ length: len }).fill(len);
  for (let i = 0; i < len; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      right[stack.pop()] = i;
    }
    stack.push(i);
  }
  stack.length = 0;
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      left[stack.pop()] = i;
    }
    stack.push(i);
  }
  res = 0;
  for (let i = 0; i < len; i++) {
    const area = (right[i] - left[i] - 1) * heights[i];
    res = Math.max(area, res);
  }
  return res;
};
console.log(largestRectangleArea([2, 4]));
