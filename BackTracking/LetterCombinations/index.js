const map = new Map();
map.set('2', 'abc');
map.set('3', 'def');
map.set('4', 'ghi');
map.set('5', 'jkl');
map.set('6', 'mno');
map.set('7', 'pqrs');
map.set('8', 'tuv');
map.set('9', 'wxyz');

function letterCombinations(digits) {
  const result = [];
  if (!digits || !digits.length) return result;
  const list = [];
  helper(result, list, digits);
  return result;
}

function helper(result, list, digits) {
  if (list.length === digits.length) {
    result.push(list.join(''));
    return;
  }
  const str = map.get(digits[list.length]);
  for (let i = 0; i < str.length; i++) {
    list.push(str[i]);
    helper(result, list, digits);
    list.pop();
  }
}
