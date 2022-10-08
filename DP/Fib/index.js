function fib(n) {
  if (n === 0 || n === 1) return n;
  const memo = [];
  memo[0] = 0;
  memo[1] = 1;
  for (let i = 0; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}
