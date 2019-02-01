const model = require('../../models');

module.exports = async (id, author, name, rating) => {
  try {
    const book = await model.Books.generate(id, author, name, rating);
    return book;
  } catch (err) {
    throw new Error('Invalid input');
  }
};
