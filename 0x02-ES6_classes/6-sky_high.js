import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = floors;
  }

  // Getter for sqft (inherited from Building)
  get sqft() {
    return this._sqft;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
