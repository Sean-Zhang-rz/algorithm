function merge(nums1, m, nums2, n) {
  const res = [];
  let index1 = 0;
  let index2 = 0;
  let index = 0;
  while (index1 < m && index2 < n) {
    if (nums1[index1] <= nums2[index2]) {
      res[index++] = nums1[index1++];
    } else {
      res[index++] = nums2[index2++];
    }
  }
  while (index1 < m) res[index++] = nums1[index1++];
  while (index2 < n) res[index++] = nums2[index2++];
  for (let i = 0; i < res.length; i++) {
    nums1[i] = res[i];
  }
  return nums1;
}
