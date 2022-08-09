function findNextGreaterTemp(nums) {
  if (nums == null || nums.length < 2) return [0];
  const stack = [];
  const res = Array.from({ length: nums.length }).fill(0)
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      const index = stack.pop();
      res[index] = i - index
    }
    stack.push(i);
  }
  return res;
}
console.log(findNextGreaterTemp([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(findNextGreaterTemp([30, 40, 50, 60]));
console.log(findNextGreaterTemp([30, 60, 90]));