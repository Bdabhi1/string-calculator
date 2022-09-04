const {
  ASCII_CODE_OF_LOWER_A,
  ASCII_CODE_OF_LOWER_Z,
  ERRORS,
} = require("./constant");
const {
  getNegativeNumbers,
  customException,
  getNumberArrayRegexAndString,
} = require("./utils/fns");

class StringCalculator {
  add(numbersString) {
    let sum = 0;
    try {
      //if string is empty then no need to go inside simply return zero
      if (!!numbersString) {
        const { numbersArray, newString } =
          getNumberArrayRegexAndString(numbersString);

        //return the sum of number and lowercase alphabets
        sum = numbersArray.reduce((total, current) => {
          const currentCharCode = current.charCodeAt();
          let number = current;

          if (Number(number) < 0) {
            const negativeNumbers = getNegativeNumbers(newString);
            throw customException(
              `${ERRORS.NEGATIVES_NOT_ALLOWED}: ${negativeNumbers}`
            );
          }

          //check current value is lowercase alphabets or not
          if (
            currentCharCode >= ASCII_CODE_OF_LOWER_A &&
            currentCharCode <= ASCII_CODE_OF_LOWER_Z
          ) {
            //substact 96 to get the value of a,b,c... respectively 1,2,3...
            number = currentCharCode - (ASCII_CODE_OF_LOWER_A - 1);
          }

          //if number is greater than 1000 it should be ignored
          number = +number > 1000 ? 0 : +number;
          return total + number;
        }, 0);
      }
      return sum;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new StringCalculator();
