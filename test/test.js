import { operators } from "../js/operators";

const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should();

describe("#testing Mocha features", function () {
  context.skip("should skip this test", function () {
    // Example of a skipped test that should not run
  });
});

describe("#Operators", function () {
  context("Add", function () {
    it("should return a number", function () {
      expect(operators.add(3, 4)).to.be.a("number");
    });
    it("should return 3", function () {
      expect(operators.add(1, 2)).to.equal(3);
    });
    it("should return 2.5", function () {
      expect(operators.add(0.75, 1.75)).to.equal(2.5);
    });
    it("should return 0", function () {
      expect(operators.add(0, 0)).to.equal(0);
    });
    it("should return -5", function () {
      expect(operators.add(-3, -2)).to.equal(-5);
    });
    it("should return an error if input empty", function () {
      expect(operators.add()).to.equal("Error");
    });
    it("should return an error if input is an empty string", function () {
      expect(operators.add("", "")).to.equal("Error");
    });
    it("should return an error if input is a string", function () {
      expect(operators.add("string 1", "string 2")).to.equal("Error");
    });
    it("should return an error if input is a true boolean", function () {
      expect(operators.add(true, true)).to.equal("Error");
    });
    it("should return an error if input is a false boolean", function () {
      expect(operators.add(false, false)).to.equal("Error");
    });
    it("should return an error if input is null", function () {
      expect(operators.add(null, null)).to.equal("Error");
    });
    it("should return an error if input is undefined", function () {
      expect(operators.add(undefined, undefined)).to.equal("Error");
    });
    it("should return an error if input is NaN", function () {
      expect(operators.add(NaN, NaN)).to.equal("Error");
    });
  });

  context("Subtract", function () {
    it("should return a number", function () {
      expect(operators.subtract(7, 3)).to.be.a("number");
    });
    it("should return 3", function () {
      expect(operators.subtract(6, 2)).to.equal(4);
    });
    it("should return 5.5", function () {
      expect(operators.subtract(6.75, 1.25)).to.equal(5.5);
    });
    it("should return 0", function () {
      expect(operators.subtract(0, 0)).to.equal(0);
    });
    it("should return -7", function () {
      expect(operators.subtract(-4, 3)).to.equal(-7);
    });
    it("should return -1", function () {
      expect(operators.subtract(-4, -3)).to.equal(-1);
    });
    it("should return an error if input is empty", function () {
      expect(operators.subtract()).to.equal("Error");
    });
    it("should return an error if input is an empty string", function () {
      expect(operators.subtract("", "")).to.equal("Error");
    });
    it("should return an error if input is a string", function () {
      expect(operators.subtract("string 1", "string 2")).to.equal("Error");
    });
    it("should return an error if input is a true boolean", function () {
      expect(operators.subtract(true, true)).to.equal("Error");
    });
    it("should return an error if input is a false boolean", function () {
      expect(operators.subtract(false, false)).to.equal("Error");
    });
    it("should return an error if input is null", function () {
      expect(operators.subtract(null, null)).to.equal("Error");
    });
    it("should return an error if input is undefined", function () {
      expect(operators.subtract(undefined, undefined)).to.equal("Error");
    });
    it("should return an error if input is NaN", function () {
      expect(operators.subtract(NaN, NaN)).to.equal("Error");
    });
  });

  context("Multiply", function () {
    it("should return a number", function () {
      expect(operators.multiply(6, 3)).to.be.a("number");
    });
    it("should return 6", function () {
      expect(operators.multiply(3, 2)).to.equal(6);
    });
    it("should return 3.875", function () {
      expect(operators.multiply(1.25, 3.1)).to.equal(3.875);
    });
    it("should return 0", function () {
      expect(operators.multiply(0, 4)).to.equal(0);
    });
    it("should return 0", function () {
      expect(operators.multiply(0, 0)).to.equal(0);
    });
    it("should return -6", function () {
      expect(operators.multiply(-2, 3)).to.equal(-6);
    });
    it("should return 24", function () {
      expect(operators.multiply(-6, -4)).to.equal(24);
    });
    it("should return an error if input is empty", function () {
      expect(operators.multiply()).to.equal("Error");
    });
    it("should return an error if input is an empty string", function () {
      expect(operators.multiply("", "")).to.equal("Error");
    });
    it("should return an error if input is a string", function () {
      expect(operators.multiply("string 1", "string 2")).to.equal("Error");
    });
    it("should return an error if input is a true boolean", function () {
      expect(operators.multiply(true, true)).to.equal("Error");
    });
    it("should return an error if input is a false boolean", function () {
      expect(operators.multiply(false, false)).to.equal("Error");
    });
    it("should return an error if input is null", function () {
      expect(operators.multiply(null, null)).to.equal("Error");
    });
    it("should return an error if input is undefined", function () {
      expect(operators.multiply(undefined, undefined)).to.equal("Error");
    });
    it("should return an error if input is NaN", function () {
      expect(operators.multiply(NaN, NaN)).to.equal("Error");
    });
  });

  context("Divide", function () {
    it("should return a number", function () {
      expect(operators.divide(1, 3)).to.be.a("number");
    });
    it("should return 4", function () {
      expect(operators.divide(8, 2)).to.equal(4);
    });
    it("should return 3", function () {
      expect(operators.divide(9.9, 3.3)).to.equal(3);
    });
    it("should return undefined", function () {
      expect(operators.divide(3, 0)).to.equal(undefined);
    });
    it("should return undefined", function () {
      expect(operators.divide(0, 0)).to.equal(undefined);
    });
    it("should return -2", function () {
      expect(operators.divide(-8, 4)).to.equal(-2);
    });
    it("should return 0.75", function () {
      expect(operators.divide(-3, -4)).to.equal(0.75);
    });
    it("should return an error if input is empty", function () {
      expect(operators.divide()).to.equal("Error");
    });
    it("should return an error if input is an empty string", function () {
      expect(operators.divide("", "")).to.equal("Error");
    });
    it("should return an error if input is a string", function () {
      expect(operators.divide("string 1", "string 2")).to.equal("Error");
    });
    it("should return an error if input is a true boolean", function () {
      expect(operators.divide(true, true)).to.equal("Error");
    });
    it("should return an error if input is a false boolean", function () {
      expect(operators.divide(false, false)).to.equal("Error");
    });
    it("should return an error if input is null", function () {
      expect(operators.divide(null, null)).to.equal("Error");
    });
    it("should return an error if input is undefined", function () {
      expect(operators.divide(undefined, undefined)).to.equal("Error");
    });
    it("should return an error if input is NaN", function () {
      expect(operators.divide(NaN, NaN)).to.equal("Error");
    });
  });
});
