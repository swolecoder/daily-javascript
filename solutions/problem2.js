//Brute Force Method

const arrayProduct = array => {
  let result = [];

  if (array.length === 1 || array.length === 0) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    let temp = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        temp = temp * array[j];
      }
    }
    result.push(temp);
  }

  return result;
};

let input = [1, 2, 3, 4, 5];

let input1 = [3, 2, 1];
console.log(arrayProduct(input1));
