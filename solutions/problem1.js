const twoSum = (array, k) => {
  let map = {};

  let reslt = [];
  for (let [index, values] of array.entries()) {
    let target = k - values;

    if (map[target]) {
      return [target, values];
    } else {
      map[values] = true;
    }
  }
  return -1;
};

let input = [10, 15, 3, 7];
console.log(twoSum(input, 17));
