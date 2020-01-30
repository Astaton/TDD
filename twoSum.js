const twoSum = (array, target) => {
  const returnArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] + array[i + 1] === target) {
      returnArray.push(i);
      returnArray.push(i + 1);
      break;
    }
  }

  return returnArray;
};

module.exports = twoSum;
