import Currency from './3-currency';

function validateAmount(amount) {
  if (typeof amount !== 'number') {
    throw new TypeError('Amount must be a number');
  }
}

function validateCurrency(currency) {
  if (!(currency instanceof Currency)) {
    throw new TypeError('Currency must be an instance of Currency');
  }
}

class Pricing {
  constructor(amount, currency) {
    validateAmount(amount);
    validateCurrency(currency);

    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount with type checking
  set amount(amount) {
    validateAmount(amount);
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    validateCurrency(currency);
    this._currency = currency;
  }

  displayFullPrice() {
    const amount = this._amount;
    const currency = this._currency;
    return `${amount} ${currency.name} (${currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
