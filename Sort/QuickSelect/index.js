function getKthSmallerEle(nums, k) {
  if (!nums || !nums.length) return;
  return quickSelect(nums, 0, nums.length - 1, k);
}
function quickSelect(nums, start, end, k) {
  if (start === end) return nums[start];
  let index = partition(nums, start, end);
  const num = index - start + 1; // 包括nums[index]
  if (k === num) {
    return nums[index];
  } else if (k < num) {
    return quickSelect(nums, start, index - 1, k);
  } else {
    // 落在高划区， 注意转换
    return quickSelect(nums, index + 1, end, k - num);
  }
}
function partition(nums, start, end) {
  let pivot = start;
  let value = nums[pivot];
  while (start < end) {
    while (start < end && nums[end] >= value) end--;
    nums[start] = nums[end];
    while (start < end && nums[start] <= value) start++;
    nums[end] = nums[start];
  }
  nums[start] = value;
  return start;
}
// console.log(getKthSmallerEle([4, 3, 5, 6, 2, 1, 10, 8, 7, 6, 6, 5], 9));
console.log(getKthSmallerEle([6, 2, 5, 1, 8, 9, 9, 13, 10, 11], 3));
// console.log(getKthSmallerEle([6, 2, 5, 1, 8, 9, 9, 13, 10, 11], 3));
// console.log(getKthSmallerEle([6, 2, 5, 1, 8, 9, 9, 13, 10, 11], 5));
// console.log(getKthSmallerEle([6, 2, 5, 1, 8, 9, 9, 13, 10, 11], 7));
// console.log(getKthSmallerEle([6, 2, 5, 1, 8, 9, 9, 13, 10, 11], 9));
// console.log(getKthSmallerEle([6, 2, 5, 1, 8, 9, 9, 13, 10, 11], 10));
