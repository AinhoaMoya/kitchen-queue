class Shelf {
  constructor(temperature, limit) {
    this.temperature = temperature
    this.limit = limit
    this.orders = []
  }
  isFull() {
    return this.orders.length > this.limit - 1
  }
  addOrder(order) {
      this.orders.push(order);
  }

  getOrder() {
    return this.orders.shift();
  }

  removeOrder() {
      if(this.orders.length === 0) {
        return "There are no orders to remove from queue";
      } else {
        console.log(`${this.orders.shift().name} has been removed`)
        this.orders.shift();
      }
  }

  checkExpiracyDates() {
    this.orders.map((order, i) => {
      let now = Date.now();
      let added = order.addedDate;
      let diff = Math.floor((Date.now() - added) / 1000);
      if (diff > order.getTTL()) {
        console.log(`Order of ${order.name} is past its expiracy date`)
        this.orders.slice(i, 1);
      }
    })
  }

}

module.exports = Shelf
