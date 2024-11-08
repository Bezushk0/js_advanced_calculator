'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  let result = 0;

  return {
    get result() {
      return result;
    },
    add(num) {
      result += num;

      return this;
    },
    subtract(num) {
      result -= num;

      return this;
    },
    multiply(num) {
      result *= num;

      return this;
    },
    divide(num) {
      result /= num;

      return this;
    },
    operate(callback, num) {
      callback(num);

      return this;
    },
    reset() {
      result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
