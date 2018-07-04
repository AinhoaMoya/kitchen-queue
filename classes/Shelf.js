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
      return new Promise((resolve) => {
        this.orders.push(order);
        resolve(order);
      })  
  }

  removeOrder() {
    return new Promise((resolve, reject) => {
      if (this.orders.length === 0) {
        reject('There are no orders to remove from queue')
      } else {
        this.orders.shift();
        resolve(`${this.orders.shift().getOrderName()} has been removed`)
      }
    })
  }

  checkExpiracyDates() {
    return new Promise((resolve) => {
      this.orders.map((order, i) => {
        let added = order.getAddedDate();
        let diff = Math.floor((Date.now() - added) / 1000);
        if (diff > order.getOrderTTL()) {
          console.log(`Order of ${order.getOrderName()} is past its expiracy date`)
          this.orders.slice(i, 1);
        }
      })
      resolve('All items in shelf are fresh');
    })
  }

}

module.exports = Shelf
