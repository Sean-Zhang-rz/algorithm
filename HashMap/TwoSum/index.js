function twoSum (nums, target) {
  if (!nums || !nums.length) return []
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let value = target - nums[i]
    if (map.has(value)) return [map.get(value), i]
    map.set(nums[i], i)
  }
}