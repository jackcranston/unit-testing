import { helpers } from "./helpers";
const { validateNumber } = helpers;

const operators = {
  add: function (a, b) {
    if ((validateNumber(a), validateNumber(b))) {
      const result = a + b;

      if (!isNaN(result) && isFinite(result)) {
        return parseFloat(result.toFixed(10));
      }
    }
    return "Error";
  },

  subtract: function (a, b) {
    if ((validateNumber(a), validateNumber(b))) {
      const result = a - b;

      if (!isNaN(result) && isFinite(result)) {
        return parseFloat(result.toFixed(10));
      }
    }
    return "Error";
  },

  multiply: function (a, b) {
    if ((validateNumber(a), validateNumber(b))) {
      const result = a * b;

      if (!isNaN(result) && isFinite(result)) {
        return parseFloat(result.toFixed(10));
      }
    }
    return "Error";
  },

  divide: function (a, b) {
    if ((validateNumber(a), validateNumber(b))) {
      const result = a / b;

      if (!isNaN(result) && isFinite(result)) {
        return parseFloat(result.toFixed(10));
      }

      return undefined;
    }
    return "Error";
  },
};

export { operators };
