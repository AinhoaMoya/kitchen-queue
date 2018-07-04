const expect = require('chai').expect;
const Order = require('../classes/Order');


describe('Order', function() {
    const testOrder = new Order('pizza', 'cold', 008320, 0.25);
    it('should return its name', function() {
        const result = testOrder.getOrderName();
        expect(result).to.equal('pizza')
    });
    it('should return its temperature', function() {
        const result = testOrder.getOrderTemp();
        expect(result).to.equal('cold')
    });
    it('should return its shelf life', function() {
        const result = testOrder.getOrderShelfLife();
        expect(result).to.equal(008320)
    });
    it('should return its decay rate', function() {
        const result = testOrder.getOrderDecayRate();
        expect(result).to.equal(0.25)
    });
    it('should return its TTL', function() {
        const result = testOrder.getOrderTTL();
        expect(result).to.equal(6656)
    });
    it('should set and return its added date', function() {
        const result = testOrder.setAddedDate(1530694108544);
        expect(result).to.equal(1530694108544)
    });
    it('should return its added date', function() {
        const result = testOrder.getAddedDate();
        expect(result).to.equal(1530694108544)
    });
});