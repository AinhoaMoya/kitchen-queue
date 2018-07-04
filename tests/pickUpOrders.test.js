const expect = require('chai').expect;
const pickUpOrders = require('../pickUpOrders.js');
const orders = require('../data/input.json');
const poisson = require('../helpers/poisson');
const Order = require('../classes/Order');

describe('Pick Up Orders function', function() {

    it('should pick up as many orders from the queue as there are drivers', function() {
        let queue = [];
        orders.map(((order) => {
            let orderObj = new Order(order.name, order.temp, order.shelfLife, order.decayRate);
            queue.push(orderObj);
        }))
        let drivers = poisson();
        let result = pickUpOrders(queue, drivers);
        expect(result).to.equal(drivers)
    });    

});

  