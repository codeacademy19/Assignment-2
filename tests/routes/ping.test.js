const server = require('../../server');

describe('ping route', () => {
  it('should respond status code 200 for GET call', async () => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
  });
  it('should respond with a string', async () => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    const response = await server.inject(options);
    expect(typeof (response.result)).toEqual('string');
  });
  it('should respond with value "pong"', async () => {
    const options = {
      method: 'GET',
      url: '/ping',
    };
    const response = await server.inject(options);
    expect(response.result).toEqual('pong');
  });
});
