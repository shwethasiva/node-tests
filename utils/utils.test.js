const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33,11);
      expect(res).toBe(44).toBeA('number');
    });
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(3, (squared) => {
        expect(squared).toBe(9).toBeA('number');
        done();
    });
  });
});


it('should set first and last name', () => {
  var user = {location: 'Toronto',age: 25 };
  var res = utils.setName(user, 'Shwetha Sivakumar');
  expect(res).toInclude({
    firstName: 'Shwetha',
    lastName:'Sivakumar'
  });
});

// it('should expect some values', () => {
//   // //expect(12).toNotBe(11);
//   // //expect({name: 'Shwetha'}).toEqual({name:'Shwetha'});
//   // //expect([2,3,4]).toExclude(1);
//   // expect({
//   //   name: 'Shwetha',
//   //   age: 25,
//   //   location: 'Toronto'
//   // }).toExclude({
//   //   age: 25
//   // })
// });
