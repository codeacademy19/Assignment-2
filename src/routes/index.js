const pingRoute = require('./ping');
const allBooksRoute = require('./allBooks');

module.exports = [
  ...pingRoute,
  ...allBooksRoute,
];
