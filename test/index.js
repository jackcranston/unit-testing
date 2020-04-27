const app = require("../app");
const sum = app.sum;

const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should();

describe("#testing Mocha features", function () {
  context.skip("should skip this test", function () {
    // This is skipped so it shouldn't run
  });
});
/*
describe("#testing", function() {
  context("the sum", function() {
    it("should return 2", function() {
      expect(1 + 1).to.equal(2);
    });
  });
  context("the number", function() {
    it("should be a number", function() {
      assert.isNumber(2);
    });
  });
  context("the array", function() {
    it("should have a length of 3", function() {
      [1, 3, 0].should.have.lengthOf(3);
    });
  });
});
*/
