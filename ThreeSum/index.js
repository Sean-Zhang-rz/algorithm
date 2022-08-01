const threeSumBf = require('./bf.js');
const threeSumPivot = require('./pivot.js');
const threeSumMap = require('./map.js');

const nums = [2, 7, 11, 15, 3];
const target = 12;
console.log(threeSumBf(target, nums));
console.log(threeSumPivot(target, nums));
// console.log(threeSumMap(target, nums));
