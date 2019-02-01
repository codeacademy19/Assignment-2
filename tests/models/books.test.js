const model = require('../../models');

describe('books generate', () => {
  beforeEach(async () => {
    await model.Books.truncate();
  });
  it('should make an entry in the database with the  given information', async () => {
    await model.Books.generate(1, 'Author1', 'book1', 'rate1');
    await model.Books.generate(2, 'Author2', 'book2', 'rate2');
    expect(await model.Books.count()).toEqual(2);
  });
  it('should make an entry in the database with the  given information', async () => {
    const bookDetail = await model.Books.generate(1, 'Author1', 'book1', 'rate1');
    expect(bookDetail.Author).toEqual('Author1');
  });
});
