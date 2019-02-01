const axios = require('axios');
const server = require('../../server');

describe('the GET /booksWithRatings route', () => {
  const mockPosts = {
    'J K Rowling': [{
      Author: 'J K Rowling', id: 10, Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', rating: 4.45,
    }, {
      Author: 'J K Rowling', id: 20, Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)', rating: 4.38,
    }, {
      Author: 'J K Rowling', id: 30, Name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)', rating: 4.54,
    }, {
      Author: 'J K Rowling', id: 40, Name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)', rating: 4.53,
    }, {
      Author: 'J K Rowling', id: 50, Name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)', rating: 4.47,
    }, {
      Author: 'J K Rowling', id: 60, Name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)', rating: 4.54,
    }, {
      Author: 'J K Rowling', id: 70, Name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)', rating: 4.62,
    }],
    'Sidney Sheldon': [{
      Author: 'Sidney Sheldon', id: 80, Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)', rating: 4.02,
    }, {
      Author: 'Sidney Sheldon', id: 100, Name: 'Tell Me Your Dreams', rating: 3.93,
    }, {
      Author: 'Sidney Sheldon', id: 90, Name: 'Master of the Game', rating: 4.1,
    }, {
      Author: 'Sidney Sheldon', id: 110, Name: 'The Other Side of Midnight (Midnight #1)', rating: 3.9,
    }, {
      Author: 'Sidney Sheldon', id: 120, Name: 'Rage of Angels', rating: 3.92,
    }],
  };
  let getMock;

  /* beforeAll(() => {
    getMock = jest.spyOn(axios, 'get');
    getMock.mockImplementation(() => mockPosts);
  });
  afterAll(() => {
    getMock.mockRestore();
  }); */
  it('should respond with 200 for /GET call', async () => {
    const options = {
      method: 'GET',
      url: '/booksWithRatings',
    };
    const response = await server.inject(options);
    expect(response).toBe(200);
  });
  it('should respond with an array of books', async () => {
    const options = {
      method: 'GET',
      url: '/booksWithRatings',
    };
    const response = await server.inject(options);
    expect(response.result).toEqual(mockPosts.data);
  });
});
