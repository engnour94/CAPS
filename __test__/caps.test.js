'use strict';

const faker = require('faker');
require('jest');
const {pickup}=require('../caps.js');
const {inTransit}=require('../caps.js');
const {delivered}=require('../caps.js');
const events = require('../events');
const vendor = require('../vendor');
const driver = require('../driver');
const {Order} = require('../vendor');

describe('Events test', () => {
  let consoleSpy;
  
  let  test= {
    store: 'NOURLIGHT',
    orderID: 'be6e212f-8587-4d4d-887c-577dd095b5a6',
    customer: 'Ethel Cole',
    address: 'Clovis, MA',
  };
  it(' Should console log the pickup details', () => {
    events.emit('pickup', test);
    events.on('pickup', pickup);
    let pickupHandler = {
      EVENT : 'pickup',
      time: new Date().toString().slice(0,15) ,
      payload: test,
    };
  
    const consoleSpy = jest.spyOn(console, 'log');
    pickup(test);
    expect(consoleSpy).toHaveBeenCalledWith(pickupHandler);
  });

  beforeEach(()=> {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();

  });
  jest.useFakeTimers();
  afterEach(async() => {
    await consoleSpy.mockRestore();
  });

  jest.useFakeTimers();


  it('test pickup handler', () => {
    pickup(test);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('test inTransit handler', () => {
    inTransit(test);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('test delivered handler', () => {
    delivered(test);
    expect(consoleSpy).toHaveBeenCalled();
  });


});

