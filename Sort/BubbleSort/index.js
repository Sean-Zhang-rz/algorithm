// O(n^2)
function bubbleSort(nums) {
  const length = nums.length;
  if (!nums || !length) return null;
  for (let i = 0; i < length; i++) {
    for (let j = 1; j < length - i; j++) {
      if (nums[j] < nums[j - 1]) {
        let temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
      }
    }
  }
  return nums;
}
// 稍微优化下
function bubbleSort2(nums) {
  const length = nums.length;
  if (!nums || !length) return null;
  for (let i = 0; i < length; i++) {
    let flag = true;
    for (let j = 1; j < length - i; j++) {
      if (nums[j] < nums[j - 1]) {
        let temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
        flag = false;
      }
    }
    if (flag) break;
  }
  return nums;
}
const nums = [4, 5, 3, 1, 10, 6, 3, 121, 7, -2, -10];
console.log(bubbleSort(nums));
console.log(bubbleSort2(nums));
