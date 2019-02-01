

module.exports = (sequelize, DataTypes) => {
  const BookLikliness = sequelize.define('BookLikliness', {
    name: DataTypes.STRING,
    Likeness: DataTypes.STRING,
  }, {});
  BookLikliness.generate = (name, Likeness) => BookLikliness.create({
    name, Likeness,
  });
  return BookLikliness;
};
