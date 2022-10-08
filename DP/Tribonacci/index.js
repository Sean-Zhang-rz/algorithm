function tribonacci(n) {
  if (n === 0 || n === 1) return n;
  if (n === 2) return 1;
  const memo = [];
  memo[0] = 0;
  memo[1] = 1;
  memo[2] = 1;
  for (let i = 3; i <= n; i++) {
    memo[i % 3] = memo[(i - 1) % 3] + memo[(i - 2) % 3] + memo[(i - 3) % 3];
  }
  return memo[n % 3];
}
