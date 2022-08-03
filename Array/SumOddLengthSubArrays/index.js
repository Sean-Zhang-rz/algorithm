function sumOddLengthSubArrays(arr){
  let res = 0
  let prefixSum = [0]
  for (let i = 0; i < arr.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + arr[i]
  }
  console.log(prefixSum);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j + i <= arr.length; j += 2) {
      res = res + (prefixSum[i + j] - prefixSum[i])
    }
  }
  return res
}
const nums = [1, 4, 2, 5, 3]
console.log(sumOddLengthSubArrays(nums));