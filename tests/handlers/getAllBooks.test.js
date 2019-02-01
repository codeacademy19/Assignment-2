const axios = require('axios');
const getBooks = require('../../src/handlers/getAllBooks');

describe('the get posts handler', () => {
  const mockReplyInterface = {
    response: jest.fn().mockImplementation(x => x),
  };
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

  it('should call the getBooks handler', async () => {
    const response = await getBooks({}, mockReplyInterface);
    expect(response).toEqual(mockPosts.data);
    expect(getMock).toHaveBeenCalled();
    // expect(mockReplyInterface.response).toHaveBeenCalledWith(mockPosts);
  });
});
