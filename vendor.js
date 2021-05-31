'use strict';
require('dotenv').config();
const events = require('./events.js');
const faker = require('faker');
const storeName = process.env.STORE_NAME;

//https://www.npmjs.com/package/faker

class Order{
  constructor(){
    this.store= storeName;
    this.orderID= faker.datatype.uuid();
    this. customer= `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.address=`${faker.address.city()}, ${faker.address.stateAbbr()}`;
  }
}

setInterval(() =>
{
  let newOrder= new Order();

  events.emit('pickup' , newOrder);
}, 5000);

events.on('delivered', (payload) => {
  console.log(`VENDOR 🌻: Thank you for delivering ${payload.orderID}🥳`);
});
  

module.exports={Order:Order};