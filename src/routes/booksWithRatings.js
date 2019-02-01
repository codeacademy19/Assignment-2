const getBooksWithRatings = require('../handlers/getBooksWithRatings');

module.exports = [{
  path: '/booksWithRatings',
  method: 'GET',
  handler: getBooksWithRatings,
}];
