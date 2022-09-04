class StringCalculator {
  add(numbersString) {
    let total = 0;
    if (!!numbersString) {
      const numbersArray = numbersString.split(",");
      total = numbersArray.reduce((total, number) => total + +number, 0);
    }
    return total;
  }
}

module.exports = new StringCalculator();
