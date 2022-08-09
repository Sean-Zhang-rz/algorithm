var nextGreaterElements = function (nums) {
  if (nums == null) return;
  const len = nums.length;
  if (len < 2) return [-1];
  const stack = [];
  const res = Array.from({ length: len }).fill(-1);
  for (let i = 0; i < len * 2; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % len]) {
      res[stack.pop()] = nums[i % len];
    }
    stack.push(i % len);
  }
  return res;
};
console.log(nextGreaterElements([1, 2, 3, 1]));
