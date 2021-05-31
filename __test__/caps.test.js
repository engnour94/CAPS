'use strict';
const events = require('../events');


describe('Events test', () => {
  let consoleSpy;
  
  let  test= {
    store: 'NOURLIGHT',
    orderID: 'be6e212f-8587-4d4d-887c-577dd095b5a6',
    customer: 'Ethel Cole',
    address: 'Clovis, MA',
  };

  beforeEach(()=> {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();

  });
  // jest.useFakeTimers();
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('test pickup handler', async() => {
    events.emit('pickup',test);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('test inTransit handler', async() => {
    events.emit('in-transit',test);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('test delivered handler', async() => {
    events.emit('delivered',test);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });


});

// describe('testing event handlers', ()=> {
//   let consoleSpy;
//   let obj = {
//     store :'cake-shop',
//     orderID : '885666cf-cb5f-4578-ac02-4a7dc7bdc5b2',
//     customer : 'Gwendolyn Williamson',
//     address : 'jordan',
//   };
//   beforeEach(()=> {
//     consoleSpy = jest.spyOn(console, 'log').mockImplementation();
//   });
    
//   afterEach(()=> {
//     consoleSpy.mockRestore();
//   });

//   it('pick up event handler', async ()=> {
//     events.emit('pickup',obj);
//     await consoleSpy();
//     expect(consoleSpy).toHaveBeenCalled();
//   });

//   it('intransit event handler', async ()=> {
//     events.emit('in-transit',obj);
//     await consoleSpy();
//     expect(consoleSpy).toHaveBeenCalled();
//   });

//   it('delivered event handler', async ()=> {
//     events.emit('delivered',obj);
//     await consoleSpy();
//     expect(consoleSpy).toHaveBeenCalled();
//   });
    
// });
