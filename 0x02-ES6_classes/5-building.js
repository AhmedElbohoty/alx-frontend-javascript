function validateSqft(sqft) {
  if (typeof sqft !== 'number') {
    throw new TypeError('Sqft must be a number');
  }
}

class Building {
  constructor(sqft) {
    validateSqft(sqft);
    this._sqft = sqft;

    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    validateSqft(sqft);
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor === Building) return;

    throw new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}

export default Building;
