function findNextGreaterNumber (nums){
  if (nums == null || nums.length < 2) return nums;
  const stack = [];
  const res = Array.from({ length: nums.length}).fill(-1)
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      const index = stack.pop();
      res[index] = nums[i]
    }
    stack.push(i);
  }
  return res;
}
function findNextSmallerNumber (nums){
  if (nums == null || nums.length < 2) return nums;
  const stack = [];
  const res = Array.from({ length: nums.length}).fill(-1)
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      const index = stack.pop();
      res[index] = nums[i]
    }
    stack.push(i);
  }
  return res;
}
function findLastGreaterNumber (nums){
  if (nums == null || nums.length < 2) return nums;
  const stack = [];
  const res = Array.from({ length: nums.length}).fill(-1)
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      const index = stack.pop();
      res[index] = nums[i]
    }
    stack.push(i);
  }
  return res;
}
function findLastSmallerNumber (nums){
  if (nums == null || nums.length < 2) return nums;
  const stack = [];
  const res = Array.from({ length: nums.length}).fill(-1)
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      const index = stack.pop();
      res[index] = nums[i]
    }
    stack.push(i);
  }
  return res;
}

console.log(findNextGreaterNumber([2,4,3,5,1,3]));
console.log(findNextSmallerNumber([2,4,3,5,1,3]));
console.log(findLastGreaterNumber([2,4,3,5,1,3]));
console.log(findLastSmallerNumber([2,4,3,5,1,3]));