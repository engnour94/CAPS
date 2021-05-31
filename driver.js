'use strict';

const events = require('./events');
const caps = require('./caps.js');
const vendor = require('./vendor.js');

setTimeout(() =>
{
  events.on('pickup' , (payload) =>
  {
    console.log(`DRIVER 🚐: picked up ${payload.orderID}`);
    events.emit('in-transit', payload);
  });
}, 1000);

setTimeout(() =>
{
  events.on('pickup' , (payload) =>
  {
    console.log(`DRIVER 🚐:delivered up ${payload.orderID}`);
    events.emit('delivered', payload);
    
  });
}, 3000);

