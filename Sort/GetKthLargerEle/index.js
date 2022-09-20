function getKthLargerEle(nums, k) {
  if (!nums || !nums.length) return
  k = nums.length - k + 1
  return quickSelect(nums, 0, nums.length - 1, k)
}
function quickSelect(nums, start, end, k) {
  if (start === end) return nums[start]
  let index = partition(nums, start, end)
  let num = index - start + 1
  if (k === num) {
    return nums[index]
  } else if (k < num) {
    return quickSelect(nums, start, index - 1, k)
  } else {
    return quickSelect(nums, index + 1, end, k - num)
  }
}
function partition(nums, start, end){
  let pivot = start;
  let value = nums[pivot]
  while (start < end) {
    while (start < end && nums[end] >= value) end--
    nums[start] = nums[end]
    while(start < end && nums[start] <= value) start++
    nums[end] = nums[start]
  }
  nums[start] = value
  return start 
}