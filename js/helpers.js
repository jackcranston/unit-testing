const helpers = {
  validateNumber: function (value) {
    if (typeof value === "number" && !isNaN(value)) {
      return true;
    }

    return false;
  },
};

export { helpers };
