function validateCode(name) {
  if (typeof name !== 'string') {
    throw new TypeError('Code must be a string');
  }
}

function validateName(name) {
  if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
  }
}

class Airport {
  constructor(name, code) {
    validateName(name);
    validateCode(code);

    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}

export default Airport;
