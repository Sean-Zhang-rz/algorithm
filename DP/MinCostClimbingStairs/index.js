function minCostClimbingStairs(cost) {
  if (!cost || !cost.length) return 0;
  const memo = [];
  memo[0] = 0;
  memo[1] = 0;
  for (let i = 2; i <= cost.length; i++) {
    memo[i % 2] = Math.min(memo[(i - 1) % 2] + cost[i - 1], memo[(i - 2) % 2] + cost[i - 2]);
  }
  return memo[cost.length % 2];
}
