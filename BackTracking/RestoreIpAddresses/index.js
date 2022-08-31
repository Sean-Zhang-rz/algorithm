function restoreIpAddresses(s) {
  const result = [];
  if (!s || !s.length || s.length < 4 || s.length > 12) return result;
  const list = [];
  helper(result, list, s, 0);
  return result;
}
function helper(result, list, s, pos) {
  if (list.length === 4) {
    if (pos !== s.length) return;
    const [a, b, c, d] = list;
    result.push(`${a}.${b}.${c}.${d}`);
  }
  for (let i = pos; i < s.length && i < pos + 3; i++) {
    const ipPart = s.substring(pos, i + 3);
    if (isValid(ipPart)) {
      list.push(ipPart);
      helper(result, list, s, i + 1);
      list.pop();
    }
  }
}
function isValid(s) {
  if (+s < 0 && +s > 255) return false;
  if (s === '0' && s.length > 1) return false;
  return true;
}
