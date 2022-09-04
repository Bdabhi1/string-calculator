const { ASCII_CODE_OF_LOWER_A, ASCII_CODE_OF_LOWER_Z } = require("./constant");

class StringCalculator {

  customException(message) {
    const error = new Error(message);
    return error;
  }

  add(numbersString) {
    let sum = 0;
    try {
      if (!!numbersString) {
        const numbersArray = numbersString.split(",");
        sum = numbersArray.reduce((total, current) => {
          const currentCharCode = current.charCodeAt();
          let number = current;
          if (Number(number) < 0) {
            throw this.CustomException(`Negatives not allowed: ${number}`);
          }
          //check current value is lowercase alphabets or not
          if (
            currentCharCode >= ASCII_CODE_OF_LOWER_A &&
            currentCharCode <= ASCII_CODE_OF_LOWER_Z
          ) {
            //substact 96 to get the value of a,b,c... respectively 1,2,3...
            number = currentCharCode - (ASCII_CODE_OF_LOWER_A - 1);
          }
          return total + +number;
        }, 0);
      }
      return sum;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new StringCalculator();
