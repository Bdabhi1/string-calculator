const stringCalculator = require("./stringcalculator");

describe("String calculator", () => {
  describe("Check 1st", () => {
    it("Should check add() is function or not", () => {
      expect(typeof stringCalculator.add).toBe("function");
    });
    
    it("Should check add() with empty string return zero", () => {
      expect(stringCalculator.add('')).toStrictEqual(0);
    });
  
    it("Should check add() with one number's string", () => {
      expect(stringCalculator.add('1')).toStrictEqual(1);
    });
  
    it("Should check add() with two number's string", () => {
      expect(stringCalculator.add('1,2')).toStrictEqual(3);
    });
  });
});
