function validateSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('Size must be a number');
  }
}

function validateLocation(location) {
  if (typeof location !== 'string') {
    throw new TypeError('Location must be a string');
  }
}

class HolbertonClass {
  constructor(size, location) {
    validateSize(size);
    validateLocation(location);

    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    validateSize(size);
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    validateLocation(location);
    this._location = location;
  }

  [Symbol.toPrimitive](type) {
    return type === 'number' ? this._size : this._location;
  }
}

export default HolbertonClass;
