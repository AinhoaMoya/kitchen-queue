const expect = require('chai').expect;
const Shelf = require('../classes/Shelf');
const Order = require('../classes/Order');


describe('Shelf', function() {

    const testShelf = new Shelf('hot', 15);
    const testOrder = new Order('pizza', 'cold', 008320, 0.25);

    it('should return wether it is full', function() {
        const result = testShelf.isFull();
        expect(result).to.equal(false)
    });


    it('should add an order to the shelf', function() {
        const result = testShelf.addOrder(testOrder);
        return result.then(function(data) {
          expect(data).to.equal(testOrder);
        });
    });

    it('should remove an order to the shelf', function() {
        testShelf.addOrder(testOrder)
            .then(() => {
                const result = testShelf.removeOrder();
                return result.then(function(data) {
                    expect(data).to.equal('pizza has been removed');          
                })
            })
    });

    it('should add an order to the shelf', function() {
        const result = testShelf.addOrder(testOrder);
        return result.then(function(data) {
          expect(data).to.equal(testOrder);
        });
    });    

});

  