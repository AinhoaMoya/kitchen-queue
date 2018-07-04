class Order {
  constructor(name, temp, shelfLife, decayRate) {
      this._name = name;
      this._temp = temp;
      this._shelfLife = shelfLife;
      this._decayRate = decayRate;
      this._addedDate = null;
  }

  getOrderName() {
    return this._name;
  }

  getOrderTemp() {
    return this._temp;
  }

  getOrderShelfLife() {
    return this._shelfLife;
  }

  getOrderDecayRate() {
    return this._decayRate;
  }

  getOrderTTL() {
    return this._shelfLife / (1 + this._decayRate)
  }

  getAddedDate() {
    return this._addedDate;
  }

  updateDecayRate() {
    this.decayRate = this.decayRate * 2;
    return this.decayRate;
  }

  setAddedDate(date) {
    this._addedDate = date;
    return this._addedDate;
  }

}

module.exports = Order;
