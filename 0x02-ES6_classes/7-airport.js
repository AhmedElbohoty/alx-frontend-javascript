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
  constructor(code, name) {
    validateCode(code);
    validateName(name);

    this._code = code;
    this._name = name;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}

export default Airport;
