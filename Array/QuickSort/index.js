const sort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const midVal = arr.splice(mid, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= midVal) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sort(left).concat(midVal, sort(right));
};
console.log(sort([7, 23, 6, 121, 64, 94, 1, 2435, 1]));
