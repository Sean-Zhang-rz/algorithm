function fib(n) {
  const memo = new Map();
  return fibHelper(n, memo);
}
function fibHelper(n, memo) {
  if (memo.has(n)) return memo.get(n);
  if (n === 0 || n === 1) return n;
  const f = fibHelper(n - 1, memo) + fibHelper(n - 2, memo);
  memo.set(n, f);
  return f;
}
