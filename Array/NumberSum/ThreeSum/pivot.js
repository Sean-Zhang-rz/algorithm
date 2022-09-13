function threeSumPivot(nums) {
  // let n = nums.length;
  // if (n < 3) return;
  // let res = [];
  // nums.sort((a, b) => a - b);
  // for (let i = 0; i < n - 2; i++) {
  //   if (nums[i] > 0) return res;
  //   if (i > 0 && nums[i] === nums[i - 1]) continue;
  //   let left = i + 1;
  //   let right = n - 1;
  //   while (left < right) {
  //     if (nums[i] + nums[left] + nums[right] === 0) {
  //       res.push([nums[i], nums[left], nums[right]]);
  //       while (left < right && nums[left] === nums[left + 1]) left++;
  //       while (left < right && nums[right] === nums[right - 1]) right--;
  //       left++;
  //       right--;
  //     } else if (nums[i] + nums[left] + nums[right] > 0) {
  //       right--;
  //     } else {
  //       left++;
  //     }
  //   }
  // }
  // return res;
  if (!nums || !nums.length) return [];
  let n = nums.length - 2;
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    // if (i !== 0 && nums[i - 1] === nums[i]) continue
    let newTarget = 0 - nums[i];
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      if (nums[start] + nums[end] === newTarget) {
        // res.push([nums[i], nums[start], nums[end]]);
        return [nums[i], nums[start], nums[end]];
      } else if (nums[start] + nums[end] > newTarget) {
        end--;
      } else {
        start++;
      }
    }
  }
  return res;
}
const nums = [-3, 1, -2, 0, 9, 5, 8];
console.log(threeSumPivot(nums));
module.exports = threeSumPivot;
