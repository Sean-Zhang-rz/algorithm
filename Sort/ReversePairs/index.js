function reversePairs (nums) {
  if(!nums || !nums.length) return 0
  return countPairs(nums, 0, nums.length - 1)
}
function countPairs (nums, start, end) {
  if (start < end) {
    const mid = start + Math.floor((end - start) / 2)
    const leftCount = countPairs(nums, start, mid)
    const rightCount = countPairs(nums, mid + 1, end)
    return leftCount + rightCount + merge(nums, start, mid, end)
  }
  return 0
}
// 左右子数组在合并时产生逆序对的个数
function merge (nums, start, mid, end) {
  let pairCount = 0
  const leftLength = mid - start + 1
  const rightLength = end - mid
  const left = []
  const right = []
  for (let i = 0; i < leftLength; i++) {
    left[i] = nums[start + i]
  }
  for (let i = 0; i < rightLength; i++) {
    right[i] = nums[mid + 1 + i]
  }
  let index = start
  let i = 0
  let j = 0
  while (i < leftLength && j < rightLength) {
    if (left[i] <= right[j]) {
      nums[index++] = left[i++]
    } else {
      // 产生逆序对 nums[i] > nums[j] 个数count: leftLength - i
      nums[index++] = right[j++]
      pairCount += leftLength - i
    }
  }
  while (i < leftLength ) nums[index++] = left[i++]
  while (j < rightLength) nums[index++] = right[j++]
  return pairCount
}