const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should();

const { getAllItems } = require("../components/data");

describe("#data functions", () => {
  context("getAllItems()", () => {
    const allItems = getAllItems();
    // We expect an array
    it("should return an array", () => {
      expect(allItems).to.be.an("array");
    });
    // We are expecting the array to contain at least one item
    it("should contain at least one item", () => {
      expect(allItems).to.not.have.lengthOf(0);
    });
    // We are expecting the array to contain objects
    it("should contain objects", () => {
      expect(allItems[0]).to.be.an("object");
    });
  });
});
