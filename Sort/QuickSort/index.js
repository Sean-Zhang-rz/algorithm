function sort(nums) {
  if (!nums || !nums.length) return
  quickSort(nums, 0, nums.length - 1)
  return nums
}

function quickSort(nums, start, end) {
  if (start >= end) return
  let pivot = partition(nums, start, end)
  quickSort(nums, start, pivot - 1)
  quickSort(nums, pivot + 1, end)
}
function partition(nums, start, end) {
  let pivot = nums[end]
  let j = start - 1
  for (let i = start; i < end; i++) {
    if (nums[i] <= pivot) {
      j = j + 1
      console.log(i, j);
      if (i !== j) {
        swap(nums, i, j)
      }
    }
  }
  if (j + 1 !== end ) swap(nums, j + 1, end)
  return j + 1
}
function swap(nums, i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
