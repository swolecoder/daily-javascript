const missingPositiveIntegers = array => {
  if (array.length === 0) return -1;

  //sum of n number is n(n+1)/2
  let n = array.length;

  //Sum of N Numbers
  let sum = (n * (n + 1)) / 2;

  for (let i = 0; i < n; i++) {
    if (array[i] > 0) {
      sum -= array[i];
    }
  }
  return sum;
};

let input = [3, 4, -1, 1];
let input1 = [1, 2, 0];
console.log(missingPositiveIntegers(input1));
