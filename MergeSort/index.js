function merge(a, b) {
  const result = [];
  let l = 0;
  let r = 0;
  while (l < a.length || r < b.length) {
    if (l >= a.length) {
      result.push(b[r]);
      r += 1;
    } else if (r >= b.length) {
      result.push(a[l])
      l += 1;
    } else if (a[l] < b[r]) {
      result.push(a[l])
      l += 1
    } else if (a[l] > b[r]) {
      result.push(b[r])
      r += 1
    }
  }
  return result;
}

function sort(array) {
  if (array.length === 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(soft(left), soft(right));
}
