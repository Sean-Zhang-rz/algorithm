function insertSort(nums) {
  if (!nums?.length) return;
  for (let j = 1; j < nums.length; j++) {
    let key = nums[j];
    let i = j - 1;
    while (i >= 0 && nums[i] > key) {
      nums[i + 1] = nums[i];
      i--;
    }
    nums[i + 1] = key;
  }
  return nums;
}
