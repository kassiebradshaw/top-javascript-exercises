const sumAll = function (firstNum, secondNum) {
  // DONE: function requires 2 integers as parameters
  // DONE: negative numbers will error
  // TODO: non-numbers will error
  // DONE: firstNum could be greater than secondNum
  if (firstNum < 0 || secondNum < 0) {
    return 'ERROR';
  };

  if (typeof(arguments[0]) === 'number' && typeof(arguments[1]) === 'number') {

    let finalSum = 0;

    if (firstNum < secondNum) {
      for (let i = firstNum; i <= secondNum; i++) {
        finalSum += i;
      }
    } else if (firstNum > secondNum) {
      for (let i = secondNum; i <= firstNum; i++) {
        finalSum += i;
      }
    }

    return finalSum;
  } else {
    return 'ERROR';
  }

};

// Do not edit below this line
module.exports = sumAll;
