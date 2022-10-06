function sort(nums) {
  if (!nums || !nums.length) return null;
  const temp = [];
  mergeSort(nums, temp, 0, nums.length - 1);
  return nums;
}
function mergeSort(nums, temp, start, end) {
  if (start < end) {
    const mid = start + Math.floor((end - start) / 2);
    mergeSort(nums, temp, start, mid);
    mergeSort(nums, temp, mid + 1, end);
    merge(nums, temp, start, mid, end);
  }
}
function merge(nums, temp, start, mid, end) {
  let left = start;
  let right = mid + 1;
  let index = start;
  while (left <= mid && right <= end) {
    if (nums[left] < nums[right]) {
      temp[index++] = nums[left++];
    } else {
      temp[index++] = nums[right++];
    }
  }
  while (left <= mid) temp[index++] = nums[left++];
  while (right <= end) temp[index++] = nums[right++];
  for (let i = start; i <= end; i++) {
    nums[i] = temp[i];
  }
}

const nums = [4, 3, 5, 6, 2, 1, 10, 8, 7, 6, 6, 5];
console.log(sort(nums));
