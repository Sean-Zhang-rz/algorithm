function fib(n) {
  if (n === 1 || n === 0) return n;
  let preOfpre = 0;
  let pre = 1;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer = pre + preOfpre;
    preOfpre = pre;
    pre = answer;
  }
  return answer;
}
