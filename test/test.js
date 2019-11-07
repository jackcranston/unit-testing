/* test/sum.js */

const app = require("../app");
const sum = app.sum;
const expect = require("chai").expect;

describe("#sum()", function() {
  context("without arguments", function() {
    it("should return 0", function() {
      expect(sum()).to.equal(0);
    });
  });

  context("with argumnets", function() {
    it("should return sum of arguments", function() {
      expect(sum(3, 5)).to.equal(15);
    });
  });
});
