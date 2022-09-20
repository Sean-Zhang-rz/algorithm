// 两根指针分三个区间
function sortColor(nums){
  let first = 0
  let second = nums.length - 1
  let i = 0
  while (i <= second) {
    if (nums[i] === 0) {
      swap(nums, i, first)
      first++
      i++
    } else if (nums[i] === 2) {
      swap(nums, i, second)
      second--
    } else {
      i++
    }
  }
  return nums
}
function swap(nums, i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}