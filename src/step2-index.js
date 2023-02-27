import { MAGIC_NUMBER, RANK_INFORMATIONS } from './constant';
import './css/styles.css';

const LottoMachine = require('./domain/controller/LottoMachine');
const Winning = require('./domain/model/Winning');
const Money = require('./domain/model/Money');
const Benefit = require('./domain/model/Benefit');

const {
  moneyInput,
  bonusNumberInput,
  purchaseButton,
  confirmButton,
  retryButton,
  winningNumbersGroup,
  lottoContent,
  result,
  closeButton,
  count,
  rate,
  resultListContainer,
  lottoList,
} = require('./document');

const lottoMachine = new LottoMachine();
const winning = new Winning();
const benefit = new Benefit();

purchaseButton.addEventListener('click', () => afterEnteredMoney());

confirmButton.addEventListener('click', (e) => afterEnteredWinning(e));

closeButton.addEventListener('click', () => {
  result.style.display = 'none';
});

retryButton.addEventListener('click', () => {
  window.location.reload();
});

const afterEnteredMoney = () => {
  saveMoney();
  lottoMachine.generateLottos();
  renderLottoContent();
  renderWinningNumebersInput();
};

const afterEnteredWinning = (e) => {
  e.preventDefault();
  saveWinning();
  const ranks = lottoMachine.getCollectedRanks();
  benefit.calculateRate(lottoMachine.getMoney().getAmount(), ranks);
  renderResult(ranks);
};

const saveMoney = () => {
  try {
    const money = new Money(moneyInput.valueAsNumber);
    lottoMachine.setMoney(money);
    purchaseButton.setAttribute('disabled', 'disabled');
    moneyInput.classList.remove('invalid');
  } catch (error) {
    moneyInput.classList.add('invalid');
    window.alert(error.message);
    moneyInput.value = '';
  }
};

const saveWinning = () => {
  try {
    winning.setWinningNumbers(getWinningNumbersInput());
    winning.setBonusNumber(bonusNumberInput.valueAsNumber);
    lottoMachine.setWinning(winning);
  } catch (error) {
    window.alert(error.message);
  }
};

const renderLottoContent = () => {
  const lottoCount = lottoMachine.getLottoCount();
  const lottos = lottoMachine.getLottos();

  count.innerHTML = lottoCount;
  lottoList.innerHTML = lottos
    .map(
      (lotto) =>
        `<div id="lotto" class="lotto-container">
        <div class="lotto-image">🎟</div>
        <div id="lottoNumbers" class="lotto-numbers normal-font">${lotto.join(
          ', '
        )}</div>
      </div>`
    )
    .join('');
  lottoContent.removeAttribute('hidden');
};

const renderWinningNumebersInput = () => {
  winningNumbersGroup.innerHTML = [...Array(MAGIC_NUMBER.winningNumberCount)]
    .map(() => '<input class="number-input" type="number" required/>')
    .join('');
};

const renderResult = (ranks) => {
  resultListContainer.innerHTML = RANK_INFORMATIONS.reverse()
    .map((rankInformation, index) => {
      return `<div class="result-list space-between">
    <p class="result-item">${rankInformation.matched}</p>
    <p class="result-item">${rankInformation.reward.toLocaleString()}</p>
    <p class="result-item">${ranks[4 - index]}개</p>
    </div>`;
    })
    .join('');
  rate.innerHTML = benefit.getRate();
  result.style.display = 'flex';
};

const getWinningNumbersInput = () => {
  const winningNumbersInput = [...Array(MAGIC_NUMBER.winningNumberCount)].map(
    (__, index) => {
      const numberInput = document.querySelector(
        `#winningNumbersGroup > input:nth-child(${index + 1})`
      );
      return numberInput.valueAsNumber;
    }
  );

  return winningNumbersInput;
};
