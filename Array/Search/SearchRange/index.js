function searchRange(nums, target) {
  if (nums == null || nums.length < 1) return [-1, -1];
  let l = 0;
  let r = nums.length - 1;
  const res = []
  while (l + 1 < r) {
    let mid = l + Math.floor((r - l) / 2)
    if (nums[mid] < target) {
      l = mid
    } else {
      r = mid
    }
  }
  if (nums[l] === target) {
    res[0] = l
  } else if (nums[r] === target) {
    res[0] = r
  } else {
    res[0] = -1
  }

  l = 0;
  r = nums.length - 1;
  while (l + 1 < r) {
    let mid = l + Math.floor((r - l) / 2)
    if (nums[mid] <= target) {
      l = mid
    } else {
      r = mid
    }
  }
  console.log(res, l, r);
  if (nums[r] === target) {
    res[1] = r
  } else if (nums[l] === target) {
    res[1] = l
  } else {
    res[1] = -1
  }
  return res
};
console.log(searchRange([2,2], 2));