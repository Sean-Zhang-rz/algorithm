function maxArea(height) {
  if (!height || !height.length) return 0;
  let area = 0;
  let start = 0;
  let end = height.length - 1;
  while (start < end) {
    area = Math.max(area, Math.min(height[start], height[end]) * (end - start));
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return area;
}
