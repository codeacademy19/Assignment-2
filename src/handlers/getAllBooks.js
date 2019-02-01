const axios = require('axios');

module.exports = async (request, h) => {
  const posts = await axios.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks');
  return h.response(posts.data);
};
