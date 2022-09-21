function reversePairs(nums) {
  if (!nums || !nums.length) return 0
  return countPairs(nums, 0, nums.length - 1)
}
function countPairs(nums, start, end) {
  if (start < end) {
    const mid = start + Math.floor((end - start) / 2)
    const leftCount = countPairs(nums, start, mid)
    const rightCount = countPairs(nums, mid + 1, end)
    return leftCount + rightCount + merge(nums, start, mid, end)
  }
  return 0
}
// 左右子数组在合并时产生逆序对的个数
function merge(nums, start, mid, end) {
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
  let i = start
  let j = mid + 1
  // 统计[start, end]区间重要翻转对的个数，切记[start, mid]有序，[mid + 1, end]有序
  while (i <= mid && j <= end) {
    if (nums[i] > 2 * nums[j]) {
      // i...j都是有序的
      pairCount += mid - i + 1
      j++
    } else {
      i++
    }
  }
  let index = start
  i = 0
  j = 0
  while (i < leftLength && j < rightLength) {
    if (left[i] <= right[j]) {
      nums[index++] = left[i++]
    } else {
      nums[index++] = right[j++]
    }
  }
  while (i < leftLength) nums[index++] = left[i++]
  while (j < rightLength) nums[index++] = right[j++]
  return pairCount
}