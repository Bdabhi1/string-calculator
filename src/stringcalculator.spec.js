const stringCalculator = require("./stringcalculator");

describe("String calculator", () => {
  describe("Problem Statement 1", () => {
    it("Should check add() is function or not", () => {
      expect(typeof stringCalculator.add).toBe("function");
    });

    it("Should check add method with empty string return zero", () => {
      expect(stringCalculator.add("")).toBe(0);
    });

    it("Should check add method with one number", () => {
      expect(stringCalculator.add("1")).toBe(1);
    });

    it("Should check add method with two number", () => {
      expect(stringCalculator.add("1,2")).toBe(1 + 2);
    });
  });

  describe("Problem Statement 2", () => {
    it("Should check add method is handle an unknown amount of numbers", () => {
      expect(stringCalculator.add("4,8,43,2,6,7,9,6,3,2,4")).toBe(
        4 + 8 + 43 + 2 + 6 + 7 + 9 + 6 + 3 + 2 + 4
      );
    });
  });

  describe("Problem Statement 3", () => {
    it("Should check add method with number and method lowercase alphabets", () => {
      expect(stringCalculator.add("1,2,a,b,z")).toBe(32);
    });
  });

  describe("Problem Statement 4", () => {
    it("Should throw an error while calling add method with a negative number", () => {
      expect(() => stringCalculator.add("2,-4,3")).toThrow(Error);
      expect(() => stringCalculator.add("2,-4,3")).toThrow(
        new Error("Negatives not allowed: -4")
      );
    });
  });

  describe("Problem Statement 5", () => {
    it("Should throw an error while calling add method with multiple negative number", () => {
      expect(() => stringCalculator.add("1,-2,-4,3,-5")).toThrow(Error);
      expect(() => stringCalculator.add("1,-2,-4,3,-5")).toThrow(
        new Error("Negatives not allowed: -2,-4,-5")
      );
    });
  });
});
