function sort (nums) {
  if (!nums || !nums.length) return
  quickSort(nums, 0, nums.length - 1)
  return nums
}
function quickSort(nums, start, end) {
  if (start >= end) return
  const pivot = partition(nums, start, end)
  quickSort(nums, start, pivot)
  quickSort(nums, pivot + 1, end)
}
function partition(nums, start, end) {
  const value = nums[start]
  while (start < end) {
    while (start < end && nums[end] >= value) end--
    nums[start] = nums[end]
    while (start < end && nums[start] <= value) start++
    nums[end] = nums[start]
  }
  nums[start] = value
  return start
}
console.log(sort([4, 3, 5, 6, 2, 1, 10, 8, 7, 6, 6, 5]));