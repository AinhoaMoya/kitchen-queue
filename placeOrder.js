const Order = require('./classes/Order');
const Shelf = require('./classes/Shelf');

let hotShelf = new Shelf('hot', 15);
let coldShelf = new Shelf('cold', 15);
let frozenShelf = new Shelf('frozen', 15);
let overflowShelf = new Shelf('overflow', 20);

async function placeOrder(order, pickupQueue) {

    // 5. We use each order and construct an Order obj containing a number of pseudo-private properties and methods to set and get such properties
    // 5. Kitchen is no longer directly accessing Order's properties  
    let orderObj = new Order(order.name, order.temp, order.shelfLife, order.decayRate);
    let shelf = eval(order.temp + 'Shelf');
    let chosenShelf;
    if (!shelf.isFull()) {
      // 2. Check wether there are any expired orders and removes them before placing a new one
      // 2. checkExpiracyDates returns a promise and only continues to adding an order once it resolves
        chosenShelf = shelf.temperature;
        shelf.checkExpiracyDates()
            .then(() => {
                orderObj.setAddedDate(Date.now())
                shelf.addOrder(orderObj)
                .then((order) => {
                    pickupQueue.push(order)
                })
                .catch((err) => {
                    console.log(err)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    } else if (shelf.isFull() && !overflowShelf.isFull()) {
        chosenShelf = 'overflow';
        overflowShelf.checkExpiracyDates()
            .then(() => {
                orderObj.setAddedDate(Date.now())
                orderObj.updateDecayRate();
                overflowShelf.addOrder(orderObj)
                    .then((order) => {
                        pickupQueue.push(order);
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    } else if (shelf.isFull() && overflowShelf.isFull()) {
        chosenShelf = shelf.temperature;
        shelf.checkExpiracyDates()
            .then(() => {
                shelf.removeOrder()
                .then((result) => {
                    console.log(result);
                    orderObj.setAddedDate(Date.now())
                    shelf.addOrder(orderObj)
                        .then((order) => {
                            pickupQueue.push(order)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return {
        order: orderObj,
        shelf: chosenShelf
    }
  }

  module.exports = placeOrder;