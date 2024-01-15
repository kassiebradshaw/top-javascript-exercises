const removeFromArray = function(array, numToRemove) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] !== numToRemove) {
      resultArray.push(array[i])
    }
  }
  return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
