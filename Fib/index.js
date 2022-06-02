function fib(n) {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
}
// 记忆化消除重复计算
function _fib(n) {
  if (n === 0 || n === 1) return n;
  let cur = 1;
  let pre = 1;
  let preOfPre = 0;
  for (let i = 2; i <= n; i++) {
    cur = pre + preOfPre;
    preOfPre = pre;
    pre = cur;
  }
  return cur;
}

const memorize = (fn) => {
  cache = {};
  return (first, ...args) => {
    console.log(first);
    if (!(first in cache)) {
      cache[first] = fn(first, ...args);
    }
    return cache[first];
  };
};
const f = memorize((n) => {
  return n === 0 || n === 1 ? n : f(n - 1) + f(n - 2);
});
f(4);
