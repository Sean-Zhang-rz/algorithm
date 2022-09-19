function sort (nums) {
  if (!nums || !nums.length) return
  mergeSort(nums, 0, nums.length - 1)
  return nums
}
function mergeSort(nums, start, end) {
  if (start < end) {
    const mid = start + Math.floor((end - start) / 2)
    mergeSort(nums, start, mid)
    mergeSort(nums, mid + 1, end)
    merge(nums, start, mid, end)
  }
}
function merge(nums, start, mid, end) {
  let leftLength = mid - start + 1
  let rightLength = end - mid
  let left = []    // nums[start...mid]
  let right = []   // nums[mid + 1...end]
  for (let i = 0; i < leftLength; i++) {
    left[i] = nums[start + i]
  }
  for (let i = 0; i < rightLength; i++) {
    right[i] = nums[mid + 1 + i]
  }
  let index = start
  let i = 0;
  let j = 0
  while (i < leftLength && j < rightLength) {
    if (left[i] < right[j]) {
      nums[index++] = left[i++]
    } else {
      nums[index++] = right[j++]
    }
  }
  while (i < leftLength) nums[index++] = left[i++]
  while (j < rightLength) nums[index++] = right[j++]
}
const nums = [4, 3, 5, 6, 2, 1, 10, 8, 7, 6, 6, 5]
console.log(sort(nums));