function findTheGreaterNumber(nums1, nums2) {
  const stack = [];
  const map = new Map();
  const res = []
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], -1)
    while (stack.length && nums2[stack[stack.length - 1]] < nums2[i]) {
      const index = stack.pop();
      map.set(nums2[index], nums2[i])
    }
    stack.push(i);
  }
  for (let i = 0; i < nums1.length; i++) {
    const value = map.get(nums1[i]);
    res[i] = value;
  }
  return res;
}
console.log(findTheGreaterNumber([4, 1, 2],[1,3,4,2]));