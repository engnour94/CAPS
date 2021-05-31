'use strict';
//1st step
//Global Event Pool (shared by all modules)
// this is a singleton for the events class
const Events = require('events');
// only one instance created
const events = new Events();
module.exports = events;