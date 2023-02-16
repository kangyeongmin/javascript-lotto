const { MAGIC_NUMBER, ERROR_MESSAGE } = require('../../constant');
const { inputValidator } = require('../../utils');

class Money {
  #amount;

  constructor(amount) {
    this.#validateAmount(Number(amount));
    this.#amount = amount;
  }

  getAmount() {
    return this.#amount;
  }

  #validateAmount(amount) {
    if (amount > MAGIC_NUMBER.moneyLimit || amount < MAGIC_NUMBER.moneyUnit) {
      throw new Error(ERROR_MESSAGE.moneyRange);
    }
    if (!inputValidator.isNumber(amount)) {
      throw new Error(ERROR_MESSAGE.number);
    }
    if (amount % MAGIC_NUMBER.moneyUnit !== 0) {
      throw new Error(ERROR_MESSAGE.moneyUnit);
    }
  }
}

module.exports = Money;
