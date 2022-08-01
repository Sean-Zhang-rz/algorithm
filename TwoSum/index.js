const twoSumBf = require('./bf.js');
const twoSumPivot = require('./pivot.js');
const twoSumMap = require('./map.js');

const nums = [2, 7, 11, 15];
const target = 9;
// console.log(twoSumBf(target, nums));
// console.log(twoSumPivot(target, nums));
console.log(twoSumMap(target, nums));
