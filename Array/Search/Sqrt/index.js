function sqrt(x) {
  if (x === 0 || x === 1) return x;
  let l = 0;
  let r = x;
  while (l + 1 < r) {
    let mid = Math.floor((l + r) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid < x) {
      l = mid;
    } else {
      r = mid;
    }
  }
  return l;
}
console.log(sqrt(9));
console.log(sqrt(10));
