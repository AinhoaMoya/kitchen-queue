const placeOrder = require('./placeOrder');
const pickUpOrders = require('./pickUpOrders');
const poisson = require('./helpers/poisson');
// 1. Orders are read from provided input file
const orders = require('./data/input');

let pickupQueue = [];

let kitchenOrderCounter = 0;

// 1. Orders are read and placed once, and they are picked up in order of arrival from queue
const kitchen = setInterval(function() {
    if (kitchenOrderCounter >= orders.length - 1) {
        clearInterval(kitchen);
    }  
    let order = orders[kitchenOrderCounter]
    placeOrder(order, pickupQueue)
        .then((data) => {
            console.log(`An order of ${data.order.getOrderName()} has just been placed in the ${data.shelf} shelf.`)
        })
        .catch((err) => {
            console.log(err);
        })
    kitchenOrderCounter++;
}, 250);


// TODO Add timer tests using SinonJS
const pickUps = setInterval(function() {
    if (pickupQueue.length === 0) {
        clearInterval(pickUps);
    }  
    let drivers = poisson();
    pickUpOrders(pickupQueue, drivers)
}, 1000);

