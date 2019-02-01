const getAllBooks = require('../handlers/getAllBooks');

module.exports = [{
  path: '/allBooks',
  method: 'GET',
  handler: getAllBooks,
}];
