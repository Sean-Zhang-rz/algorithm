function trap(height) {
  if (!height || !height.length) return 0;
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  while (left <= right) {
    if (leftMax < rightMax) {
      leftMax = Math.max(leftMax, height[left]);
      result += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      result += rightMax - height[right];
      right--;
    }
  }
  return result;
}
