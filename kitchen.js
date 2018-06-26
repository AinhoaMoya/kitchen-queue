const poisson = require('./helpers/poisson');
const orders = require('./data/orders');
const Shelf = require('./classes/Shelf')

let hotShelf = new Shelf('hot', 15);
let coldShelf = new Shelf('cold', 15);
let frozenShelf = new Shelf('frozen', 15);
let overflowShelf = new Shelf('overflow', 20);

let pickups = [];

setInterval(function() {
  let drivers = poisson();
  pickUpOrders = pickups.slice(0, drivers);
  pickUpOrders.map((order) => {
    console.log(`${order.name} has been picked up by a driver.`)
  })
  pickups.splice(0, drivers)
}, 1000)

setInterval(function() {
  let order = orders[Math.floor(Math.random() * orders.length)]
  placeOrder(order)
  frozenShelf.checkExpiracyDates()
  hotShelf.checkExpiracyDates()
  coldShelf.checkExpiracyDates()
  overflowShelf.checkExpiracyDates()
}, 250);

function placeOrder(order) {
  let shelf = eval(order.temp + 'Shelf');
  if (!shelf.isFull()) {
    order.addedDate = Date.now();
    shelf.addOrder(order)
    console.log(`An order of ${order.name} has just been placed in the ${order.temp} shelf.`)
    pickups.push(shelf.getOrder())
  } else if (shelf.isFull() && !overflowShelf.isFull()) {
    order.addedDate = Date.now();
    order.decayRate = order.decayRate * 2;
    overflowShelf.addOrder(order);
    console.log(`An order of ${order.name} has just been placed in the overflow shelf.`)
    pickups.push(shelf.getOrder())
  } else if (shelf.isFull() && overflowShelf.isFull()) {
    shelf.removeOrder()
    order.addedDate = Date.now();
    shelf.addOrder(order)
    console.log(`An order of ${order.name} has just been placed in the ${order.temp} shelf.`)
    pickups.push(shelf.getOrder())
  }
}
