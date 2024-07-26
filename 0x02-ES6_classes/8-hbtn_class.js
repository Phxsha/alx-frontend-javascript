export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') {
      throw new TypeError('Size must be a number and location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Method to handle casting to a Number
  valueOf() {
    return this._size;
  }

  // Method to handle casting to a String
  toString() {
    return this._location;
  }
}
