# Understand how orders are removed from shelves at capacity

Each shelf is implemented using a queue like structure. One of it's properties is a limit, which we assign when creating each shelf object.

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

Before adding a new order to the shelf, we check wether its limit has been reached. That is, the maximum number of orders its `orders` property can hold. If it has, we check wether we can place our order in the Overflow Shelf. If that's the case, we continue with the execution of our program normally. If not, we remove an order from the initial shelf and push the new one in.

```javascript
if (shelf.isFull() && overflowShelf.isFull()) {
  shelf.removeOrder()

  ...

  shelf.addOrder(order)

  ...
}
```
