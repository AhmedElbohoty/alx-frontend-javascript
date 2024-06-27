import Building from './5-building';

function validateFloors(floors) {
  if (typeof floors !== 'number') {
    throw new TypeError('Floors must be a number');
  }
}

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);

    validateFloors(floors);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    validateFloors(floors);
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
