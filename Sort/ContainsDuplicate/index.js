function containDuplicates (nums) {
  if (!nums || !nums.length) return false
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true
    set.add(nums[i])
  }
}