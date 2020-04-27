const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Shwetha', 25);
    expect(spy).toHaveBeenCalledWith('Shwetha', 25);
  });

  it('should call saveUser with user object', () => {
    var email = 'shwetha.sivakumar@queensu.ca';
    var password = 'abcdef';

    app.handleSignup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
