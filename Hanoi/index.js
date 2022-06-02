function hanoi(n, from, to, cache) {
  return n === 1
    ? `${from}${to}`
    : hanoi(n - 1, from, cache, to) + '\n' + `${from}${to}` + '\n' + hanoi(n - 1, cache, to, from);
}
console.log(hanoi(3, 'A', 'C', 'B'));
