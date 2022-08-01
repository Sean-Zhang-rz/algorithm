function twoSumPivot(target, nums) {
  const arr = nums.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === target) return [arr[left], arr[right]];
    if (arr[left] + arr[right] < target) left++;
    if (arr[left] + arr[right] > target) right--;
  }
}

module.exports = twoSumPivot;
