// 4. Kitchen is solely concerned now with placing orders and queing them for pickup
// 4. pickUpOrders takes care of dispatching poisson number of orders per second
function pickUpOrders(orders, drivers) {
    let pickups;
    if (orders.length === 0) {
        console.log('There are no more orders ready for pickup');
    } else {
        pickUps = orders.slice(0, drivers);
        pickUps.map((order) => {
            console.log(`${order.getOrderName()} has been picked up by a driver.`)
        })
        orders.splice(0, drivers);
    }

    return pickUps.length;
}

module.exports = pickUpOrders;