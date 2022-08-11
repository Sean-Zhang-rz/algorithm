function search(n, bad) {
  let l = 1;
  let r = n;
  while (l + 1 < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      l = mid;
    } else {
      r = mid;
    }
  }
  if (nums[l] === target) return l;
  if (nums[r] === target) return r;
  return -1;
}
