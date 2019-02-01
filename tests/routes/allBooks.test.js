const axios = require('axios');
const server = require('../../server');

describe('the GET /allBooks route', () => {
  const mockPosts = {
    data: [{
      id: 1,
      Author: 'J K Rowling',
      Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
    }],
  };
  let getMock;

  beforeAll(() => {
    getMock = jest.spyOn(axios, 'get');
    getMock.mockImplementation(() => mockPosts);
  });
  afterAll(() => {
    getMock.mockRestore();
  });
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'GET',
      url: '/allBooks',
    };
    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
  });
  it('should respond with an array of books', async () => {
    const options = {
      method: 'GET',
      url: '/allBooks',
    };
    const response = await server.inject(options);
    expect(response.result).toEqual(mockPosts.data);
  });
});
