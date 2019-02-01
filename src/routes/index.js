const pingRoute = require('./ping');
const allBooksRoute = require('./allBooks');
const allBooksWithRatings = require('./booksWithRatings');

module.exports = [
  ...pingRoute,
  ...allBooksRoute,
  ...allBooksWithRatings,
];
