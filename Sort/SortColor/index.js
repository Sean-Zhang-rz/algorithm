function sortColors(nums) {
  if (!nums) return
  let white = 0
  let red = 0
  let blue = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      red++
    } else if (nums[i] === 1) {
      white++
    } else {
      blue++
    }
  }
  let index = 0
  for (let i = 0; i < red; i++) {
    nums[index++] = 0
  }
  for (let i = 0; i < white; i++) {
    nums[index++] = 1
  }
  for (let i = 0; i < blue; i++) {
    nums[index++] = 2
  }
  return nums
}