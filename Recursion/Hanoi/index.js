function hanoi(A, B, C) {
  while (A.length > 1) B.push(A.pop());
  C.push(A.pop());
  while (B.length) C.push(B.pop());
  return C;
}
