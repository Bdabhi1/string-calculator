const { MATCH_NEGATIVE_NUMBER_REGEX } = require("../constant");

function getNegativeNumbers(text) {
  const negativeNumberArray = text.match(MATCH_NEGATIVE_NUMBER_REGEX);
  return negativeNumberArray.join(",");
}

function customException(message) {
  const error = new Error(message);
  return error;
}

module.exports = {
  getNegativeNumbers,
  customException,
};
