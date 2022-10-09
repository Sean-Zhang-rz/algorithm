function climbStairs(n) {
  if (n === 0 || n === 1) return n;
  const memo = [];
  memo[0] = 1;
  memo[1] = 1;
  for (let i = 2; i <= n; i++) {
    memo[i % 2] = memo[(i - 1) % 2] + memo[(i - 2) % 2];
  }
  return memo[n % 2];
}
