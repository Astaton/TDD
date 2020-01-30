const { expect } = require("chai");
const twoSum = require("./twoSum");

describe("twoSum", () => {
  it("is a function", () => {
    expect(typeof twoSum).to.equal("function");
  });
  it("it returns an array", () => {
    expect(Array.isArray(twoSum())).to.equal(true);
  });
  it("it returns an array of the indexes that equal target numbe", () => {
    expect(twoSum([1, 2], 3)[0]).to.equal(0);
  });
});
