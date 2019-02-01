const { pingHandler } = require('../../src/handlers/pingHandler');

describe('ping handler function', () => {
  it('should return a string', () => {
    expect(typeof (pingHandler())).toEqual('string');
  });
  it('should return a string with value pong', () => {
    expect(pingHandler()).toEqual('pong');
  });
});
