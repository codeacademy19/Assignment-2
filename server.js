const Hapi = require('hapi');
const routes = require('./src/routes');

const server = new Hapi.Server({
  port: 7000,
  host: '0.0.0.0',
});

server.route(routes);

module.exports = server;
