const model = require('../../models');

describe('bookLiklines generate', () => {
  beforeEach(async () => {
    await model.BookLikliness.truncate();
  });
  it('should make an entry in the database with the  given information', async () => {
    await model.BookLikliness.generate('name1', 'Like');
    await model.BookLikliness.generate('name2', 'Disike');
    expect(await model.BookLikliness.count()).toEqual(2);
  });
  it('should make an entry in the database with the  given information', async () => {
    const bookDetail = await model.BookLikliness.generate('name1', 'Like');
    expect(bookDetail.Likeness).toEqual('Like');
  });
});
