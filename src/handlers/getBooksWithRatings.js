const axios = require('axios');

const rateArray = [];
const callback = (rating) => {
  rateArray.push(rating);
};
const promises = [];
// const getRating = id => axios.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${id}`).then(response => response.data);
module.exports = async (request, h) => {
  const posts = await axios.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks');

  await posts.data.books.map((x) => {
    promises.push(axios.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${x.id}`));
  });
  await axios.all(promises).then((results) => {
    // console.log(results[0].data);
    results.map((response) => {
      callback(response.data.rating);
    });
    // console.log(rateArray);
  });

  for (let i = 0; i < rateArray.length; i++) {
    posts.data.books[i].rating = rateArray[i];
  }
  // const jsonObject = posts.data.books.keys();
  const jsonObject = posts.data.books.reduce((result, current) => {
    result[current.Author] = result[current.Author] || [];
    result[current.Author].push(current);
    return result;
  }, {});
  return (jsonObject);
};
