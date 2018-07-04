const expect = require('chai').expect;
const placeOrder = require('../placeOrder.js');
const Order = require('../classes/Order');
const Shelf = require('../classes/Shelf');

describe('Place Order function', function() {
    let frozenShelf = new Shelf('frozen', 2);

    let pickupQueue = [];

    it('should place an order in appropriate shelf', function() {
        let testOrder = {
            "name": "Banana Split",
            "temp": "frozen",
            "shelfLife": 20,
            "decayRate": 0.63
        };
        const resultOrder = new Order('Banana Split', 'frozen', 20, 0.63);

        const result = placeOrder(testOrder, pickupQueue);
        return result.then(function(data) {
            expect(data.shelf).to.equal('frozen')
        })
    });    

});
