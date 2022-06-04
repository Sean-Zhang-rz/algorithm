function merge(a, b) {
  const result = [];
  let l = 0;
  let r = 0;
  while (l < a.length || r < b.length) {
    if (l >= a.length) {
      result.push(b[r]);
      r += 1;
    } else if (r >= b.length) {
      result.push(a[l]);
      l += 1;
    } else if (a[l] < b[r]) {
      result.push(a[l]);
      l += 1;
    } else if (a[l] > b[r]) {
      result.push(b[r]);
      r += 1;
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

// 就地操作
function _sort(array) {
  return inplaceSort(array, 0, array.length);
}

function inplaceSort(array, start, end) {
  if (end - start <= 1) return array;
  const mid = Math.floor((start + end) / 2);
  inplaceSort(array, start, mid);
  inplaceSort(array, mid, end);
  _merge(array, start, mid, end);
  return array;
}

function _merge(array, start, middle, end) {
  let l = start;
  let r = middle;
  while (l < middle && r < end) {
    let w = 0;
    while (array[l] <= array[r] && l < middle) {
      l += 1;
    }
    while (array[l] >= array[r] && r < end) {
      r += 1;
      w += 1;
    }
    let part = array.splice(r - w, w);
    array.splice(l, 0, ...part);
    l += w;
    middle += w;
  }
  return array;
}
console.log(_sort([1, 4, 112, 4, 5, 108, 12, 1281, 2]));
