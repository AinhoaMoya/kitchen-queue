class Order {
  constructor(name, temp, shelfLife, decayRate) {
      this.name = name;
      this.temp = temp;
      this.shelfLife = shelfLife;
      this.decayRate = decayRate;
  }
  getTTL() {
    return this.shelfLife / (1 + this.decayRate)
  }
}

module.exports = Order;
