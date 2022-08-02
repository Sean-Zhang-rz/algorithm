function reverseString(s) {
  if (s?.length < 2) return
  for (let i = 0; i < s.length / 2; i++) {
    let j = s.length - i - 1
    let temp = s[i];
    s[i] = s[j]
    s[j] = temp;
  }
}