# Get up and running

Just run:

```
npm run install
npm run start

```

For running tests: 

```
npm run test

```

At this point your terminal will start printing the orders being placed in the different shelves, and also the orders being simultaneously picked up by drivers.

# Understanding how orders distributed among shelves

Each shelf is implemented using a queue like structure. One of its properties is `limit`, which we assign when creating each shelf object and represents the maximum number of items each shelf can hold.

```javascript
class Shelf {
  constructor(temperature, limit) {
    this.temperature = temperature
    this.limit = limit
    this.orders = []
  }
  ...
}
```

Before adding a new order to the shelf, we check wether its limit has been reached. That is, the maximum number of orders its `orders` property can hold. If it has, we check wether we can place our order in the `Overflow Shelf`. If that's the case, we continue with the execution of our program normally. If not, we remove an order from the initial shelf and push the new one in.

```javascript
if (shelf.isFull() && overflowShelf.isFull()) {
  shelf.removeOrder()

  ...

  shelf.addOrder(order)

  ...
}
```