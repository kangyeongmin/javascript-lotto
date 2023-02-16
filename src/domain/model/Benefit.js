const { RANK_INFORMATIONS, MAGIC_NUMBER } = require('../../constant');

class Benefit {
  #rate;

  getRate() {
    return this.#rate;
  }

  calculateRate(money, ranks) {
    const total = ranks.reduce(
      (accumulator, rank, index) =>
        accumulator + rank * RANK_INFORMATIONS[index].reward,
      0
    );

    this.#rate = Number(((total / money) * MAGIC_NUMBER.percent).toFixed(1));
  }
}

module.exports = Benefit;
