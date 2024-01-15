const reverseString = function(string) {
  let stringArray = string.split('');
  let arrayLength = stringArray.length;
  let reversedString = '';
  for (let i = 0; i < arrayLength; i++){
    reversedString += stringArray.pop();
  }
  return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
