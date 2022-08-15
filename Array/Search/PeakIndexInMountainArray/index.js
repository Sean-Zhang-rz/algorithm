function peakIndexInMountainArray(arr) {
  let len = arr.length;
  if (arr == null || len < 3) return;
  let l = 0;
  let r = len - 1;
  while (l + 1 < r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] < arr[mid + 1]) {
      l = mid;
    } else {
      r = mid;
    }
  }
  return arr[l] > arr[r] ? l : r;
}
console.log(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]));
