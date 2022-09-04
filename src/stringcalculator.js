const { ASCII_CODE_OF_LOWER_A, ASCII_CODE_OF_LOWER_Z } = require("./constant");

class StringCalculator {
  add(numbersString) {
    let sum = 0;
    if (!!numbersString) {
      const numbersArray = numbersString.split(",");
      sum = numbersArray.reduce((total, current) => {
        const currentCharCode = current.charCodeAt();
        let number = current;
        //check current value is lowercase alphabets or not
        if (currentCharCode >= ASCII_CODE_OF_LOWER_A && currentCharCode <= ASCII_CODE_OF_LOWER_Z) {
          //substact 96 to get the value of a,b,c... respectively 1,2,3...
          number = currentCharCode - (ASCII_CODE_OF_LOWER_A - 1);
        }
        return total + +number;
      }, 0);
    }
    return sum;
  }
}

const a = new StringCalculator();

module.exports = new StringCalculator();
