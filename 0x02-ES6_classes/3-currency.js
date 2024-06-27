function validateCode(name) {
  if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
  }
}

function validateName(name) {
  if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
  }
}

class Currency {
  constructor(code, name) {
    validateCode(code);
    validateName(name);

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    validateCode(code);
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    validateName(name);
    this._name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this._code})`;
  }
}

export default Currency;
