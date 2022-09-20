function containNearByDuplicates(nums, k) {
  if (!nums || !nums.length) return false
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) return true
    map.set(nums[i], i)
  }
  return false
}