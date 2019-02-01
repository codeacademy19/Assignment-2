

module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    Author: DataTypes.STRING,
    Name: DataTypes.STRING,
    rating: DataTypes.STRING,
  }, {});
  // Books.associate = function (models) {
    // associations can be defined here
  // };
  Books.generate = (id, Author, Name, rating) => Books.create({
    id, Author, Name, rating,
  });
  return Books;
};
