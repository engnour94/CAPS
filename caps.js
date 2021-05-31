'use strict';
// 2nd step
//Main Hub Application
// Manages the state of every package (ready for pickup, in transit, delivered, etc)
// Logs every event to the console with a timestamp and the event payload


///*****************************///
const events = require('./events.js');
require('./driver.js');
require('./vendor.js');

events.on('pickup' , pickup);
events.on('in-transit' , inTransit);
events.on('delivered' ,delivered);
function printout(event, payload)
{
  console.log({EVENT:event, time: new Date().toString().slice(0,15) , payload});
}

function pickup(payload) {
  printout('pickup' , payload);
//   console.log({EVENT:'pickup', time: new Date().toString().slice(0,15) , payload});
} 

function inTransit (payload) {
  printout('in-transit' , payload);
//   console.log({EVENT:'in-transit', time: new Date().toString().slice(0,15) , payload});
}

function delivered(payload){
  printout('delivered' , payload);
//   console.log({EVENT:'delivered', time: new Date().toString().slice(0,15) , payload});
} 

module.exports={
  pickup:pickup, 
  inTransit:inTransit,
  delivered:delivered,

};






