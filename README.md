# Get up and running

The first thing you need to do is generate the orders json data file. In order to do that just run the following command from the root of the project:

`cd data && node ordersGenerator.js`

Once you have your json file ready to go, just run:

`node kitchen.js`

At this point your terminal will start printing the orders being placed in the different shelves, and also the orders being simultaneously picked up by drivers.

# Extra credit

1. Abstract the order decay formula so that it can be dynamic per order:

> I have done so by calculating the amount of Time to Live (ttl) of each product, based on its decay rate and value formula. This way we can constantly loop through the shelves and check which ones have expired by checking wether the different between the time they were added and Date.now() is bigger than the order's TTL.

2. Make orders and pickups asynchronous so that pick ups can happen while orders come in:

> I am using setTimeInterval() as a non-blocking technique to run both my order placing function and my driver pick up function without at the same time. I believe there are cleaner, more extendable ways to do this as, for example, using async queue and async parallel or a job priority queue library such as Kue. I did not do so for this assignment cause I wanted to implement a solution from scratch that didn't rely on any external modules.
