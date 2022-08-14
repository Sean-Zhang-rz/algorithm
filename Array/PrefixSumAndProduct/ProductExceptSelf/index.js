function productExceptSelf(nums) {
  if (nums == null || nums.length < 1) return;
  const left = [1];
  const right = [];
  const answer = [];
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  right[nums.length - 1] = 1;
  for (let j = nums.length - 2; j >= 0; j--) {
    right[j] = right[j + 1] * nums[j + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i];
  }
  return answer;
}

// 简化版
function productExceptSelf(nums) {
  if (nums == null || nums.length < 1) return;
  const answer = [1];
  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }
  let factor = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    answer[j] *= factor;
    factor *= nums[j];
  }
  return answer;
}
console.log(productExceptSelf([2, 3, 4, 5, 2]));
