module.exports = {
  sum: function(a, b) {
    if (a && b) {
      return a * b;
    } else if (!a && !b) {
      return 0;
    }
  }
};
