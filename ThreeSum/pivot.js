function threeSumPivot(target, nums) {
  if (nums.length < 3) return;
  const arr = nums.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 3; i++) {
    const theOtherTwo = target - arr[i];
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] + arr[right] === theOtherTwo) return [arr[i], arr[left], arr[right]];
      if (arr[left] + arr[right] < theOtherTwo) left++;
      if (arr[left] + arr[right] > theOtherTwo) right--;
    }
  }
}

module.exports = threeSumPivot;
