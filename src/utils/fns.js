const { MATCH_NEGATIVE_NUMBER_REGEX, COMMA_NEWLINE_SPLIT_REGEX } = require("../constant");

function getNegativeNumbers(text) {
  const negativeNumberArray = text.match(MATCH_NEGATIVE_NUMBER_REGEX);
  return negativeNumberArray.join(",");
}

function customException(message) {
  const error = new Error(message);
  return error;
}

function getSplitRegexAndString(text) {
  let splitOperator = COMMA_NEWLINE_SPLIT_REGEX
  let newString = text
  if (text.startsWith("//")) {
     const indexOfNewLineOperator = text.indexOf('\n')
     splitOperator = text.slice(2,indexOfNewLineOperator)
     newString = text.slice(3 + splitOperator.length)
  }
  const numbersArray = newString.split(splitOperator);
  return {
    numbersArray,
    newString
  }
}

module.exports = {
  getNegativeNumbers,
  customException,
  getSplitRegexAndString
};
