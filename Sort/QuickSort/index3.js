const sort = (arr) => {
  if (arr.length <= 1) return arr;
  // const mid = Math.floor(arr.length / 2);
  // const midVal = arr.splice(mid, 1)[0];
  const last = arr.length - 1
  const lastValue = arr[arr.length - 1]
  arr.length = arr.length - 1

  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= lastValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return sort(left).concat(lastValue, sort(right));
};
const arr = [4, 3, 5, 6, 2, 1, 10, 8, 7, 6, 6, 5]
console.log(sort(arr));
console.log(arr);