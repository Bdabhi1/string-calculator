const stringCalculator = require("./stringcalculator");

describe("String calculator", () => {
  describe("Problem Statement 1", () => {
    it("Should check add() is function or not", () => {
      expect(typeof stringCalculator.add).toBe("function");
    });

    it("Should check add method with empty string return zero", () => {
      expect(stringCalculator.add("")).toBe(0);
    });

    it("Should check add method with one number's string", () => {
      expect(stringCalculator.add("1")).toBe(1);
    });

    it("Should check add method with two number's string", () => {
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
});
