function quickSort(arr) {
  if (arr?.length <= 1) return arr;
  const pivot = Math.floor(arr.length / 2);
  const pivotValue = arr[pivot];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivot) continue;
    if (arr[i] < pivotValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivotValue, ...quickSort(right)];
}

function getSmallerKthEle(arr, k) {
  if (!arr || !arr?.length) return null;
  return quickSelect(arr, 0, arr.length, k);
}
function quickSelect(arr, start, end, k) {
  if (start >= end) return arr[start];
}
function partition() {}
