const {
  MATCH_NEGATIVE_NUMBER_REGEX,
  COMMA_NEWLINE_SPLIT_REGEX,
  COMMA,
  ODD_NUMBER_SIGN,
  EVEN_NUMBER_SIGN,
  CHANGE_DELIMITER_SIGN,
  NEW_LINE,
  STRING_ZERO,
} = require("../constant");

/**
 *
 * @param {*} text: string with number or lowercase alphabets or both
 * @returns: string of negative numbers from string using regex
 */
function getNegativeNumbers(text) {
  const negativeNumberArray = text.match(MATCH_NEGATIVE_NUMBER_REGEX);
  return negativeNumberArray.join(COMMA);
}

/**
 *
 * @param {*} message: error message
 * @returns: error with name, message, stack,
 */
function customException(message) {
  const error = new Error(message);
  return error;
}

/**
 *
 * @param {*} array: array of numbers
 * @returns: array of odd numbers
 */
function oddNumbersArray(array) {
  return array.filter((number) => +number % 2 === 1);
}

/**
 *
 * @param {*} array: array of numbers
 * @returns: array of even numbers
 */
function evenNumbersArray(array) {
  return array.filter((number) => +number % 2 === 0);
}

/**
 *
 * @param {*} text: string with number or lowercase alphabets or both
 * @returns: array with number or lowercase alphabets or both and new text
 */
function getNumberArrayRegexAndString(text) {
  let splitOperator = COMMA_NEWLINE_SPLIT_REGEX;
  let newString = text;
  const isEvenOrOdd =
    text.startsWith(ODD_NUMBER_SIGN) || text.startsWith(EVEN_NUMBER_SIGN);
  const isChangeSplitOperator =
    text.startsWith(CHANGE_DELIMITER_SIGN) || isEvenOrOdd;
  const firstCharOfstring = text.charAt(0);

  if (isChangeSplitOperator) {
    const indexOfNewLineOperator = text.indexOf(NEW_LINE);
    const sliceFrom = text.indexOf(CHANGE_DELIMITER_SIGN) + 2;
    splitOperator = text.slice(sliceFrom, indexOfNewLineOperator);
    newString = text.slice(sliceFrom + 1 + splitOperator.length);
  }
  let numbersArray = newString.split(splitOperator);

  if (isEvenOrOdd) {
    if (firstCharOfstring === STRING_ZERO) {
      numbersArray = oddNumbersArray(numbersArray);
    } else {
      numbersArray = evenNumbersArray(numbersArray);
    }
  }

  return {
    numbersArray,
    newString,
  };
}

module.exports = {
  getNegativeNumbers,
  customException,
  getNumberArrayRegexAndString,
};
