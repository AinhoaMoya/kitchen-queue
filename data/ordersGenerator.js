const fs = require('fs')
const Order = require('../classes/Order')

let orders = [];

let names = ['Pizza', 'Burguer', 'Sushi', 'Lasagna', 'Paella', 'Kebab', 'Chicken', 'Burrito', 'Noodles', 'Tacos', 'Tapas']
let temps = ['hot', 'cold', 'frozen']
let shelfLives = [100, 200, 300, 400, 500, 600, 700, 800, 900]
let decayRates = [0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.50]

function randomIndex(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


for (var i=0; i < 60; i++) {
  let name = randomIndex(names)
  let temp = randomIndex(temps)
  let shelfLife = randomIndex(shelfLives)
  let decayRate = randomIndex(decayRates)

  let order = new Order(name, temp, shelfLife, decayRate)
  order.ttl = order.shelfLife / (1 + order.decayRate)
  orders.push(order)
}

let data = JSON.stringify(orders);

fs.writeFileSync('./orders.json', data);
