function test(nums){
  let l = 0;
  let r = nums.length - 1
  while (l < r) {
    while (l < r && nums[l] % 2 === 0) l++;
    while (l < r && nums[r] % 2 === 1) r--;
    if (l < r) {
      let temp = nums[l]
      nums[l] = nums[r]
      nums[r] = temp
    }
  }
  return nums
}

console.log(test([3,1,2,4]));