import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const clone = new Car(); // Create a new Car instance instead of EVCar
    const symbols = Object.getOwnPropertySymbols(this);
    symbols.forEach((symbol) => {
      clone[symbol] = this[symbol];
    });
    return clone;
  }
}
