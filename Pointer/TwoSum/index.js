function twoSum(numbers, target) {
  if (!numbers || !numbers.length) return [];
  let left = 0;
  let right = numbers.length - 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}
